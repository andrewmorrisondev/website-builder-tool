# Define variables for paths and commands
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --no-builtin-rules

NPM := npm
NEXT := npx next
TAILWIND := npx tailwindcss

# Colors
GREEN = \033[0;32m
RED = \033[0;31m
RESET = \033[0m

# Helper function to check the result of a command and only show the output if it fails
define CHECK
	echo -n "$1... "; \
	$(2) > /dev/null 2>&1 && echo -e "$(GREEN)✓$(RESET)" || { \
		echo -e "$(RED)✗$(RESET)"; \
		$(2); \
		exit 1; \
	}
endef

# Detect all package.json files in the 'packages' directory dynamically
PACKAGES := $(shell find packages -mindepth 1 -maxdepth 1 -type d)

# Ensure the package exists and is valid
check-package:
	@if [ ! -d "$(PKG)" ]; then \
		echo -e "$(RED)Error: Package $(PKG) does not exist.$(RESET)"; \
		exit 1; \
	fi

# Dev: Run the dev server for the specific package
dev:
	@$(MAKE) check-package
	@echo "Running dev server for $(PKG)..."
	@cd $(PKG) && $(NPM) run dev

# Clean: Clean build artifacts for a specific package or all packages
clean:
	@if [ -n "$(PKG)" ]; then \
		$(call CHECK,"Cleaning build artifacts for $(PKG)", rm -rf $(PKG)/.next $(PKG)/build); \
	else \
		for package in $(PACKAGES); do \
			rm -rf $$package/.next $$package/build; \
		done; \
		echo -e "$(GREEN)Cleaned up build artifacts for all packages$(RESET)"; \
	fi

# Project: Run project tasks for a specific package or all packages
project: clean
	@if [ -n "$(PKG)" ]; then \
		$(MAKE) check-package; \
		cd $(PKG) && \
		$(call CHECK,"Installing dependencies", $(NPM) install) && \
		$(call CHECK,"Formatting code........", npx prettier --write .) && \
		$(call CHECK,"Linting code...........", yarn workspaces run lint --fix) && \
		$(call CHECK,"Building project.......", $(NEXT) build); \
	else \
		for package in $(PACKAGES); do \
			if [ -d "$$package" ]; then \
				echo "Running project tasks for $$package..."; \
				(cd $$package && \
				$(call CHECK,"Installing dependencies", $(NPM) install) && \
				$(call CHECK,"Formatting code........", npx prettier --write .) && \
				$(call CHECK,"Linting code...........", yarn workspaces run lint --fix) && \
				$(call CHECK,"Building project.......", $(NEXT) build)) || { echo "Build failed for $$package"; exit 1; }; \
			else \
				echo "Skipping $$package, directory not found"; \
			fi; \
		done; \
	fi

# New component creation
new-component:
	@$(MAKE) check-package
	@$(call CHECK,"Creating new component in $(PKG)", $(NPM) run create-component)

# Allow make to accept package name in the form of packages/<package-name>
packages/%:
	@$(MAKE) dev PKG=$@

# Default target
%:
	@:
# stable build
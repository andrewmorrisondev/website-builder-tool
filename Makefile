SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --no-builtin-rules

YARN := yarn

# Colors
GREEN = \033[0;32m
RED = \033[0;31m
YELLOW = \033[0;33m
RESET = \033[0m

# Helper function to check the result of a command and only show the output if it fails
define CHECK
	echo -n "$1... "; \
	$(2) > /dev/null 2>&1 && echo -e "$(GREEN)✓$(RESET)" || { \
		echo -e "$(RED)✗$(RESET)"; \
		echo -e "$(YELLOW)Debugging output for $1:$(RESET)"; \
		$(2); \
		exit 1; \
	}
endef

# Detect all package.json files in the 'packages' directory dynamically
PACKAGES := $(shell find packages -mindepth 1 -maxdepth 1 -type d)

# Build: Build all projects
project:
	@echo -e "$(YELLOW)Building all projects...$(RESET)"; \
	$(YARN) workspaces foreach --all run build; \
	echo -e "$(GREEN)All projects built$(RESET)"

# Dev: Run dev servers for all projects
dev:
	@echo -e "$(YELLOW)Running dev server for all projects...$(RESET)"; \
	$(YARN) workspaces foreach --all --parallel run dev; \
	echo -e "$(GREEN)Dev servers started for all projects$(RESET)"

# Build a specific package
package:
	@if [ -z "$(PACKAGE)" ]; then \
		echo -e "$(RED)Error: PACKAGE variable is not set.$(RESET)"; \
		exit 1; \
	fi
	@echo -e "$(YELLOW)Building project for $(PACKAGE)...$(RESET)"; \
	$(call CHECK,"Building $(PACKAGE)", $(YARN) workspace $(PACKAGE) build)

# Run dev server for a specific package
dev-package:
	@if [ -z "$(PACKAGE)" ]; then \
		echo -e "$(RED)Error: PACKAGE variable is not set.$(RESET)"; \
		exit 1; \
	fi
	@echo -e "$(YELLOW)Starting dev server for $(PACKAGE)...$(RESET)"; \
	$(call CHECK,"Running dev for $(PACKAGE)", $(YARN) workspace $(PACKAGE) dev)

# Clean: Clean build artifacts for all projects
clean:
	@echo -e "$(YELLOW)Cleaning build artifacts for all projects...$(RESET)"; \
	for package in $(PACKAGES); do \
		echo "Cleaning $$package"; \
		rm -rf $$package/.next $$package/build; \
	done; \
	echo -e "$(GREEN)Cleaned up build artifacts for all projects$(RESET)"

# Clean: Clean build artifacts for a specific package
clean-package:
	@if [ -z "$(PACKAGE)" ]; then \
		echo -e "$(RED)Error: PACKAGE variable is not set.$(RESET)"; \
		exit 1; \
	fi
	@echo -e "$(YELLOW)Cleaning build artifacts for $(PACKAGE)...$(RESET)"; \
	rm -rf $(PACKAGE)/.next $(PACKAGE)/build; \
	echo -e "$(GREEN)Cleaned up build artifacts for $(PACKAGE)$(RESET)"

# Usage instructions
help:
	@echo -e "$(GREEN)Available commands:$(RESET)"
	@echo "  make project ------------------------------ Build all projects"
	@echo "  make dev ----------------------------------- Run dev servers for all projects"
	@echo "  make clean --------------------------------- Clean all build artifacts"
	@echo "  make package PACKAGE=<package-name> -------- Build specific package"
	@echo "  make dev-package PACKAGE=<package-name> ---- Run dev server for specific package"
	@echo "  make clean-package PACKAGE=<package-name> -- Clean build artifacts for a specific package"

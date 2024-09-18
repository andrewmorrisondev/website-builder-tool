# Define variables for paths and commands
SHELL := /bin/zsh
NPM := npm
NEXT := npx next
TAILWIND := npx tailwindcss

# Colors
GREEN = \033[0;32m
RED = \033[0;31m
RESET = \033[0m

define CHECK
	@echo -n "$1... "
	@$(2) > /dev/null 2>&1 && echo -e "$(GREEN)✓$(RESET)" || { echo -e "$(RED)✗$(RESET)"; $(2); }
endef

# Source environment at the start of the shell
.ONESHELL:
SHELL := /bin/zsh
.SHELLFLAGS := -c 'source ~/.zshrc && exec zsh'

# Dev: Install dependencies, run the dev server and Tailwind in development mode
dev:
	@$(NPM) run dev

# Target: Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	@rm -rf .next
	@rm -rf build
	@echo -e "$(GREEN)Cleaned up build artifacts$(RESET)"

# Target: Run project tasks
project: clean
	$(call CHECK, "Install dependencies", $(NPM) install)
	$(call CHECK, "Format code.........", npx prettier --write .)
	$(call CHECK, "Lint code...........", $(NPM) run lint -- --fix)
	$(call CHECK, "Build project.......", $(NEXT) build)

new-component:
	@$(NPM) run create-component

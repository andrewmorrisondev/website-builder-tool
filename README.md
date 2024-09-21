# Website Builder Tool

A highly customizable monorepo-based website builder tool designed to generate websites using Next.js, TypeScript, and custom components. This tool allows for the creation and deployment of dynamic, responsive websites with minimal effort.

## Features

- **Monorepo Architecture**: Organized into multiple packages to allow modular development and reuse of components.
- **Next.js App Router**: Uses the new Next.js App Router for server-side rendering, static site generation, and API routes.
- **TypeScript Support**: Full TypeScript support with custom module paths defined in `tsconfig.json`.
- **Component Library**: Custom-built components (e.g., `Accordion`, `ScrollAnimation`, `HeroBanner`, `InfoCard`) with theme-based styling.
- **Framer Motion Animations**: Components use Framer Motion for smooth and customizable animations.
- **Makefile for Automation**: Use Makefile commands to streamline development tasks such as running dev servers, cleaning build artifacts, and deploying.
- **ESLint & Prettier**: Pre-configured for consistent code formatting and linting.
- **Jest for Testing**: Configured with `ts-jest` to ensure TypeScript-friendly unit testing.

## Project Structure

The project is organized into the following structure:

```
website-builder-tool
├── .github/            # GitHub Actions, PR templates, etc.
├── packages/           # Each package contains a subproject or feature
│   ├── template/       # Template package for new websites
│   ├── components/     # Shared custom components
│   └── other-packages/ # Additional packages
├── components/         # Component directory for shared components
├── public/             # Public assets
├── .eslintrc.cjs       # Root ESLint configuration
├── Makefile            # Automation tasks
├── tsconfig.json       # Root TypeScript configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v7 or higher)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/andrewmorrisondev/website-builder-tool.git
cd website-builder-tool
npm install
```

### Running the Development Server

To start the development server for a specific package, use the following command:

```bash
make dev PKG=packages/template
```

This will start the Next.js development server for the specified package.

### Building the Project

To build a specific package for production:

```bash
make project PKG=packages/template
```

Or, to build all packages:

```bash
make project
```

### Cleaning Build Artifacts

To clean the build artifacts for a specific package or all packages:

```bash
make clean PKG=packages/template
# or
make clean
```

### Creating a New Component

You can create a new component in a specific package using the following command:

```bash
make new-component PKG=packages/components
```

## Automation and Commands

The following Makefile commands are available for ease of use:

- **`make dev PKG=<package>`**: Run the development server for a specific package.
- **`make project PKG=<package>`**: Run project tasks such as installing dependencies, formatting, linting, and building.
- **`make clean PKG=<package>`**: Clean the build artifacts for a specific package or all packages.
- **`make new-component PKG=<package>`**: Create a new component inside a specified package.

## Testing

This project uses Jest and `ts-jest` for testing. To run tests, use the following command:

```bash
npm run test
```

## ESLint & Prettier

To run linting and code formatting, use:

```bash
npm run lint
npm run format
```

Linting and formatting rules are pre-configured in `.eslintrc.cjs` and `.prettierrc`.

## Deployment

Deployment can be automated using the CI/CD pipeline set up in the `.github/workflows/ci.yml`. This ensures that each push to the `main` branch is built and tested before deployment.

## Contributing

Contributions are welcome! Please submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For more information, feel free to contact the project maintainer:

- **Andrew Morrison**
- GitHub: [andrewmorrisondev](https://github.com/andrewmorrisondev)
- Website: [andrewmorrison.dev](https://andrewmorrison.dev)

# Welcome to Andrew Morrison's Portfolio

This is my personal portfolio website, built using **Next.js**, **TypeScript**, **Vercel**, and **Tailwind CSS**. The website showcases my work as a software engineer, freelance web developer, musician, and features interactive code examples, chess matches, and a media gallery.

## Table of Contents

- [Development](#development)
- [Deployment](#deployment)
- [Build Commands](#build-commands)
- [Styling](#styling)
- [Side Hustles](#side-hustles)
- [License](#license)

## Development

To start the development server:

```zsh
make dev
```

This command installs dependencies and starts the development environment using Next.js and Tailwind CSS.

## Deployment

This project is hosted on Vercel. Deployment is integrated with GitHub for continuous deployment. Here's how deployment works:

1. Make a pull request (PR) to the \`main\` branch on GitHub.

   - The PR will trigger automated checks, including linting and building the project.
   - Ensure the PR passes all checks before merging.

2. After the PR is merged into the \`main\` branch, Vercel will automatically redeploy the project.

   - Vercel monitors the \`main\` branch and will trigger a redeployment whenever there’s a successful build.

## Build Commands

Here are the key commands to manage the project:

- **Develop** (install dependencies and start the dev server):

  ```zsh
  make dev
  ```

- **Build the project**:
  ```zsh
  make build
  ```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can customize the Tailwind configuration or switch to another CSS framework if necessary.

To build Tailwind for production, run:

```zsh
make build
```

## Side Hustles

This portfolio showcases more than just my development work. Here's what you'll find:

- **Music Career**: A section highlighting my work as a musician.
- **Chess Matches**: Replay my chess games.
- **Interactive Code Examples**: A space for exploring interactive coding examples.
- **Media Gallery**: Photos and videos I've captured.

## License

This project is open-source under the MIT License. Contributions and suggestions are welcome!

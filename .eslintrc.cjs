/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest", // Set the latest ECMAScript version
    sourceType: "module", // Allows the use of imports
    ecmaFeatures: {
      jsx: true, // Enables JSX parsing
    },
  },
  env: {
    browser: true, // Browser global variables
    commonjs: true, // CommonJS global variables and require statements
    es6: true, // Enable ES6 syntax
  },
  ignorePatterns: ["dist/", "build/", "!**/.server", "!**/.client"], // Ignore build-related files

  extends: [
    "eslint:recommended", // Use recommended ESLint rules
    "plugin:@typescript-eslint/recommended", // TypeScript ESLint rules
    "plugin:prettier/recommended", // Prettier integration for formatting
    "next",
    "next/core-web-vitals",
    "plugin:import/recommended", // Import plugin for handling unresolved paths
    "plugin:import/typescript", // TypeScript support for import plugin
  ],

  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json", // Path to the TypeScript config
        alwaysTryTypes: true, // Always try to resolve types
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"], // Support for TypeScript and JS extensions
      },
    },
  },

  overrides: [
    // React and JSX configurations
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y", "prettier"], // Additional plugins
      extends: [
        "plugin:react/recommended", // Recommended React rules
        "plugin:react/jsx-runtime", // Automatically imports `React` in JSX
        "plugin:react-hooks/recommended", // Rules for React hooks
        "plugin:jsx-a11y/recommended", // Accessibility rules for JSX
      ],
      settings: {
        react: {
          version: "detect", // Auto-detect the React version
        },
        formComponents: ["Form"], // Define components that act as forms
        linkComponents: [
          { name: "Link", linkAttribute: "to" }, // Support for custom link components
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
      rules: {
        "prettier/prettier": "error", // Enforce Prettier rules as errors
        "react/prop-types": "off", // Disable prop-types enforcement (using TypeScript)
        "react/jsx-uses-react": "off", // Disable React in JSX scope rule (Next.js handles this)
        "react/react-in-jsx-scope": "off", // Not required in Next.js
        "react-hooks/rules-of-hooks": "error", // Enforce React hook rules
        "react-hooks/exhaustive-deps": "warn", // Warn for missing dependencies in hooks
        "jsx-a11y/anchor-is-valid": [
          "error",
          {
            components: ["Link"], // Enforce valid anchor tags
            specialLink: ["to"],
            aspects: ["invalidHref", "preferButton"],
          },
        ],
        "jsx-a11y/label-has-associated-control": [
          "error",
          {
            controlComponents: ["Input"], // Enforce label control associations
            assert: "either",
            depth: 3,
          },
        ],
        "next/no-html-link-for-pages": "off",
      },
    },

    // TypeScript-specific configurations
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"], // TypeScript ESLint plugin
      parser: "@typescript-eslint/parser", // Use the TypeScript parser
      settings: {
        "import/internal-regex": "^@/", // Handle internal imports using '@/'
      },
      extends: [
        "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
        "plugin:import/recommended", // Import plugin for better import resolution
        "plugin:import/typescript", // TypeScript support for import plugin
        "plugin:prettier/recommended", // Integrate Prettier rules
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_", // Ignore variables prefixed with '_'
            varsIgnorePattern: "^_", // Ignore unused variables prefixed with '_'
            varsIgnorePattern: "^React$", // Ignore unused `React` variables
          },
        ],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true, // Allow omitting return types in expressions
            allowTypedFunctionExpressions: true,
          },
        ],
        "@typescript-eslint/no-non-null-assertion": "warn", // Warn about non-null assertions
        "prettier/prettier": "error", // Enforce Prettier rules as errors
      },
    },

    // Node.js-specific configurations
    {
      files: [".eslintrc.cjs", "packages/backend/**/*.ts"],
      env: {
        node: true, // Enable Node.js environment
      },
    },
  ],
};

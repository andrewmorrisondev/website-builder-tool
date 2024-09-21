module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: "tsconfig.jest.json", // Use your Jest-specific TypeScript config
    }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["node_modules/(?!.*.mjs$)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/packages/app/$1", // Adjust the alias based on your project structure
  },
  roots: ["<rootDir>/packages/"],
};

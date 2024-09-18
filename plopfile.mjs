export default (plop) => {
  plop.setHelper("kebab-case", function (text) {
    // Replace uppercase letters with kebab-case and make the first letter lowercase
    return text
      .replace(/([a-z])([A-Z])/g, "$1-$2") // Add a hyphen before uppercase letters
      .toLowerCase(); // Convert all characters to lowercase
  });

  plop.setGenerator("component", {
    description:
      "Generate a React component with Emotion styles and a test file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "app/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        templateFile: "plop-templates/styles.hbs",
      },
      {
        type: "add",
        path: "tests/components/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/test.hbs",
      },
    ],
  });
};

import simpleGit from "simple-git";
import fs from "fs";
import path from "path";

// Initialize the git object
const git = simpleGit();

// Path to the PR template
const templatePath = path.join(
  process.cwd(),
  ".github",
  "PULL_REQUEST_TEMPLATE.md",
);

async function generatePRTemplate() {
  try {
    // Get the latest commit messages
    const log = await git.log();
    const commitMessages = log.all
      .map((commit) => `- ${commit.message}`)
      .join("\n");

    // Get the list of modified files
    const diffSummary = await git.diffSummary();

    // Generate the changelog section (group by file type, for example)
    const changelog = diffSummary.files
      .map((file) => {
        let changeType;

        // Check if the file is a text file (i.e., has insertions and deletions)
        if ("insertions" in file && "deletions" in file) {
          if (file.insertions > 0 && file.deletions === 0) {
            changeType = "Added";
          } else if (file.deletions > 0 && file.insertions === 0) {
            changeType = "Removed";
          } else if (file.insertions > 0 && file.deletions > 0) {
            changeType = "Modified";
          } else {
            changeType = "Unchanged";
          }
        } else {
          // Handle non-text files (like binary files)
          changeType = "Binary File Modified";
        }

        return `- ${file.file}: ${changeType}`;
      })
      .join("\n");

    // Generate the PR template content
    const templateContent = `
## Code Change Summary

### Objective

<!-- Describe the purpose of the PR -->

### Commit Messages
${commitMessages}

### Files Changed
${diffSummary.files.map((file) => `- ${file.file}`).join("\n")}

### Changelog
${changelog}

### Additional Information
<!-- Add any extra information, screenshots, or demos -->
`;

    // Write the content to the PULL_REQUEST_TEMPLATE.md file
    fs.writeFileSync(templatePath, templateContent);
    console.log(`PR template updated successfully at ${templatePath}`);
  } catch (error) {
    console.error("Error generating PR template:", error);
  }
}

generatePRTemplate();

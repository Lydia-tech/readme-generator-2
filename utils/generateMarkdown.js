const renderLicenseBadge = (license) => {
  return license !== "None" ? `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)` : ''
}
// if ? then : else
const renderLicenseLink = (license) => {
  return license !== "None" ?  `\n* [License](#license)\n` : ''
}

const renderLicenseSection = (license) => {
  return license !== "None" ? (
    `## License
    This project is licensed under the ${license} license.`
  ) : ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)
    ${renderLicenseLink(data.license)}
  
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation 

  Run the following npm command using git to install repo dependencies:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing 

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions 

  Questions? Shoot me a messsage at ${data.email}. 

  Find all my work here [${data.github}](https://github.com/${data.github}/)!
  
`;
}

// for testing `npm run test
// const inquirer = require("inquirer"); (old way)
// import inquirer from 'inquirer'; (new way)

// export default generateMarkdown;
module.exports = generateMarkdown;

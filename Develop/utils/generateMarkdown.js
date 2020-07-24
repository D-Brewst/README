// function to generate markdown for README
function generateMarkdown(data) {
  return `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This app is covered under ${data.license} licensing.
  ## Contributing
  ${data.contributers}
  ## Tests
      ${data.tests}
  ## Questions
  [GitHub](http://github.com/${data.github})  
  Free free to email me at ${data.email}.
`;
}

module.exports = generateMarkdown;

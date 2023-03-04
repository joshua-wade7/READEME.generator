// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// turn this into a const
const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  guidelines,
  credits,
  testing,
  license,
}) =>
  `# ${title}


## Description

${description}

## Table of Contents

[Go to Title](#-title)
[Go to Description](#-description)
[Go to Installation](#-installation)
[Go to Usage](#-usage)
[Go to Contributor Guidelines](#-guidelines)
[Go to Credits](#-credits)
[Go to Test Instructions](#-testing) 
[Go to Questions](#-questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${guidelines}

## Credits

${credits}

## Testing

${testing}

## License

${license}

## Questions



`;

module.exports = generateMarkdown;

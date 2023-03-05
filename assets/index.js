//Declare global variables and setup modules we need to pull in.

const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
// const questions = []; //using inquirer.prompt instead.

//Prompt array for asking user questions
// const promptUser = () => {
// return
inquirer
  .prompt([
    //why is this all of a sudden not allowing me to answer each prompt?
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a short description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide any steps required to install your project",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide the user with how they can use your project",
    },
    {
      type: "input",
      name: "guidelines",
      message: "Please add a short description for contribution guidelines.",
    },
    {
      type: "input",
      name: "credits",
      message: "Please list any collaborators who helped with your project",
    },
    {
      type: "input",
      name: "testing",
      message:
        "Please provide any test instructions for the user(if applicable)",
    },
    {
      type: "list",
      name: "license",
      message: "What type of license should your project have?",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
  ])
  .then((data) => {
    console.log(data);
    const generateReadMe = generateMarkdown(data);
    console.log(generateReadMe);
    fs.writeFile("README.md", generateReadMe, (err) => {
      err ? console.log(err) : console.log("success");
    });
  });
// };
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// promptUser();
// const generateREADME = { username, email };

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

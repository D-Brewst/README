var inquirer = require("inquirer");
var fs = require("fs");
var markdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
          type: "input",
          message: "What is the title of your project?",
          name: "title"
        },
        {
          type: "input",
          message: "Describe your project.",
          name: "description"
        },
        {
          type: "input",
          message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
          name: "installation"
        },
        {
          type: "input",
          message: "Provide instructions and examples for use.",
          name: "usage"
        },
        {
          type: "list",
          message: "Choose a license",
          name: "license",
          choices: ["MIT", "Open Software License 3.0", "ISC", "Microsoft Public License", "European Union Public License 1.1"]
        },
        {
          type: "input",
          message: "How can developers contribute to your project?",
          name:"contributers"
        },
        {
          type: "input",
          message: "Write tests for your application and provide examples on how to run them.",
          name: "tests"
        },
        {
          type: "input",
          message: "Enter your github username.",
          name: "github"
        },
        {
          type: "input",
          message: "Enter your email.",
          name: "email"
        }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response) {
        console.log(response);
        writeToFile("README.md", response);
      });
}

// function call to initialize program
init();


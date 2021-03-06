const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


/*

https://github.com/SBoudrias/Inquirer.js/

interface questionProps {
    type: string;
    name: string;
    message: string;
    default: string;
    choices?: string[];
}

    type: "",
    name: "",
    message: "",
    default: ""

    **optional**
    choices: ["", "", "", "", ""]
*/

// array of Nine questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        default: "github"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        default: "test123@test.com",
        // validate: function() {
        //    // /\.(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])
        // }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of the readme?",
        default: "cli-generated"
        // title
    },
    {
        type: "input",
        name: "description",
        message: "What is the readme description?",
        default: "this is a test"
        // description
    },
    {
        type: "list",
        name: "license",
        message: "What type of license is desired for project?",
        // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository#searching-github-by-license-type
        choices: ["MIT", "BSD 3", "APACHE 2.0", "GPL 3.0", "wtfpl", "None"],
        default: "MIT"
    },
    {
        type: "input",
        name: "installation",
        message: "Command to execute on install",
        default: "npm install"
        // installation
        // npm install
    },
    {
        type: "input",
        name: "test",
        message: "Execute test script.",
        default: "npm run test"
        // to run tests
        // npm run testf
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this repo?",
        default: "Fork and then create a new branch."
        // usage - what does the user need to know about using this repo
        // that this a test
    },
    {
        type: "input",
        name: "contributing",
        message: "How to contribute to this repo?",
        default: "Determine if this is a test. If this is a test how does this test work? What makes this test a test?"
        // contributing - how to contribute?
        // figure out how this test works
    }
];
// function to write README file
const transcribeFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("README generating...");
        transcribeFile("public/GENERATED.md", generateMarkdown({ ...inquirerResponses }))
        console.log("README has generated.");
        
    })
}

// function call to initialize program
init();

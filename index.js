// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username? (Required)",
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title? (Required)",
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project. (Required)",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmFeatures",
        message: "Would you like to elaborate on any features of this project?",
        default: false
    },
    {
        type: "input",
        name: "features",
        message: "Please enter a short description of features included in your application.",
        validate: features => {
            if (features) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        },
        when: ({confirmFeatures}) => {
            if (confirmFeatures) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "Please enter the installation instructions for your project. (Required)",
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "deployedLink",
        message: "If your application is live, please include the link to the deployed application."
    },
    {
        type: "input",
        name: "imagePath",
        message: "If your application is live, please provide a relative directory path to an image of your deployed application."
    },
    {
        type: "input",
        name: "usage",
        message: "Please include a short description of your application's usage information. (Required)",
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "credit",
        message: "Please enter a short message crediting your contributors. (Required)",
        validate: credit => {
            if (credit) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmCreditLink",
        message: "Would you like to link to contributors' GitHub accounts?",
        default: false
    },
    {
        type: "input",
        name: "creditGitHub",
        message: "What are your contributors' GitHub usernames? (Separate each new entry with a space)",
        validate: gitHub => {
            if (gitHub) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        },
        when: ({confirmCreditLink}) => {
            if (confirmCreditLink) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project use?",
        choices: ["None", "Apache", "Boost", "BSD", "CC0", "Eclipse", "GNU", "Hippocratic", "IBM", "ISC", "MIT",  "Mozilla", "ODC", "Perl", "SIL", "Unlicense", "WTFPL", "Zlib"],
        default: "None"
    },
    {
        type: "confirm",
        name: "confirmTest",
        message: "Were any tests performed on this application?",
        default: false
    },
    {
        type: "input",
        name: "test",
        message: "Please enter a short description of the tests conducted on your application.",
        validate: tests => {
            if (tests) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        },
        when: ({confirmTest}) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmContribution",
        message: "Is your project currently accepting contributions?",
        default: false
    },
    {
        type: "input",
        name: "contributions",
        message: "Please enter a short description of how developers can contribute to this project.",
        validate: howTo => {
            if (howTo) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        },
        when: ({confirmContribution}) => {
            if (confirmContribution) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmContact",
        message: "Would you like to include an email at which users can contact you?",
        default: true
    },
    {
        type: "input",
        name: "contact",
        message: "Please enter your email address.",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        },
        when: ({confirmContact}) => {
            if (confirmContact) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmDetails",
        message: "Would you like to include any additional details regarding how to contact you?",
        default: false
    },
    {
        type: "input",
        name: "detail",
        message: "Please enter additional contact instructions.",
        validate: instructions => {
            if (instructions) {
                return true;
            } else {
                console.log("this is a required field");
                return false;
            }
        },
        when: ({confirmDetails}) => {
            if (confirmDetails) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(data => {
        console.log(generateMarkdown(data));
        return generateMarkdown(data);
    })
    .then(pageMD => {
        return writeToFile(pageMD);
    })
    .catch(err => {
        console.log(err);
    });

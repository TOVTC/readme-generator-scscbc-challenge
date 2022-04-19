// const dummy = {
//     username: "username",
//     title: "project title",
//     description: "project description",
//     confirmFeatures: false,
//     //features: "features",
//     install: "installation instructions",
//     deployedLink: "",
//     imagePath: "",
//     usage: "usage",
//     credit: "a message crediting my contributors",
//     confirmCreditLink: false,
//     //creditGitHub: "a b    c d e  f",
//     license: "MIT",
//     confirmTest: false,
//     //test: "tests conducted",
//     confirmContribution: false,
//     //contribution: "how to contribute",
//     confirmContact: false,
//     //contact: "email@email.com"
// }

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
        default: true
    },
    {
        type: "input",
        name: "creditGitHub",
        message: "What are your contributor's GitHub usernames? (Separate each new entry with a space)",
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
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the '.then()' method
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
        console.log(generateMarkdown(data))
        return generateMarkdown(data);
    })
    .then(pageMD => {
        return writeToFile(pageMD)
    })
    .catch(err => {
        console.log(err);
    });

// console.log(generateMarkdown(dummy));



// - separate functions into separate files/packages
// - streamline code
// - walkthrough video
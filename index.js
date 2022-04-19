const dummy = {
    username: "username",
    title: "project title",
    description: "project description",
    install: "installation instructions",
    deployedLink: "link.com",
    imagePath: "./image.png",
    credit: "a message crediting my contributors",
    confirmCreditLink: true,
    creditGitHub: "a b c d e f",
    license: "MIT",
    confirmTest: true,
    test: "tests conducted",
    confirmContact: true,
    contact: "email@email.com"
}

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username? (Required)"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title? (Required)"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project. (Required)"
    },
    {
        type: "input",
        name: "install",
        message: "Please enter the installation instructions for your project.",
    },
    {
        type: "input",
        name: "deployedLink",
        message: "If your application is live, please include the link to the deployed application."
    },
    {
        type: "input",
        name: "imagePath",
        message: "If your application is live, please provide a relative directory path to an image of your deployed application.",
    },
    {
        type: "input",
        name: "credit",
        message: "Please enter a short message crediting your contributors.",
    },
    {
        type: "confirm",
        name: "confirmCreditLink",
        message: "Would you like to link to contributors' GitHub accounts?",
        default: true,
    },
    {
        type: "input",
        name: "creditGitHub",
        message: "What are your contributor's GitHub usernames? (Separate each new entry with a space)",
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
        name: "confirmContact",
        message: "Would you like to include an email at which users can contact you?",
        default: true
    },
    {
        type: "input",
        name: "contact",
        message: "Please enter your email address.",
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
function writeToFile(fileName, data) {
        // .then(NOT A .THEN())
    //     const writeFile = fileContent => {
    //         return new Promise((resolve, reject) => {
    //             fs.writeFile('./dist/index.html', fileContent, err => {
    //             // if there's an error, reject the Promise and send the error to the Promise's '.catch()' method
    //                 if (err) {
    //                     reject(err);
    //                     // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
    //                     return;
    //                 }
    //                 // if everything went well, resolve the Promise and send the successful data to the '.then()' method
    //                 resolve({
    //                     ok: true,
    //                     message: "File created!"
    //                 });
    //             });
    //         });
    //     }
    // );
}

// // TODO: Create a function to initialize app
// function init() {
//     return inquirer.prompt(questions);
// }

// // Function call to initialize app
// init()
//     .then(data => {
//         console.log(generateMarkdown(data));
//     });

console.log(generateMarkdown(dummy));

// - pseudocode project
// - collect necessary functions (NPM libraries and README questions)
// - initial application
// - README Object Literal
// - conditional REAME construction
// - validations + optional sections
// - separate functions into separate files/packages
// - streamline code
// - walkthrough video

//project title - required
//project description - required
//table of contents - optional + href jump to sections of README
//installation - optional(?)
//usage information - screen shots + relative file path and images file(?)
//credits/contributions
//license - required + icon/badge for license + description of license
//tests - optional(?)
//questions - add github username and link to github profile + email (and how to reach)
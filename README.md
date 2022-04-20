
  # README Generator
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</br>
    </br>
  This application uses Node.js to generate README.md files.
  
  ## Table of Contents
  * [Features](#features)
  * [Installation](#installation)
  * [Usage Information](#usage)
  * [Authors & Acknowledgements](#credits)
  * [License](#license)  
  * [Contact](#questions)
  
  ## Features<a name="features"></a>
  Many of the sections in this README are conditionally generated according to user specification.</br>
  This application additionally allows for users to link directly to multiple contributors' GitHub pages.
    
  ## Installation <a name="installation"></a>
  After cloning the repository and installing node.js, enter "node index.js" in the terminal and answer the prompts to generate a README file. The final README will be called "README.md" and will be written to a folder called "dist" in the root directory (please ensure this directory exists in root prior to running the application).
  
  ## Usage Information<a name="usage"></a>
  This template is suitable for and adaptable to most projects.
  ![README Generator](./readme-generator.png "README Generator")</br>
    
  ## Authors & Acknowledgements<a name="credits"></a>
  Special thanks to the following:</br>
    [lukas-h](https://github.com/lukas-h)</br>[octocat](https://github.com/octocat)</br>
    
  A thank you to Lukas for providing licensing information and badges [here](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba).
  
  Made by [TOVTC](https://github.com/TOVTC).
  
  ## License<a name="license"></a>
  This application uses the MIT License. For more information regarding usage, please visit [this link](https://opensource.org/licenses/MIT.).
    
  ## Questions?<a name="questions"></a>
  Contact repository author via [GitHub](https://github.com/TOVTC).

  ## Assignment Information - Node.js Challenge: Professional README Generator
  ### User Story
  AS A developer</br>
  I WANT a README generator</br>
  SO THAT I can quickly create a professional README for a new project

  ### Acceptance Criteria
  GIVEN a command-line application that accepts user input</br>
  WHEN I am prompted for information about my application repository</br>
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions</br>
  WHEN I enter my project title</br>
  THEN this is displayed as the title of the README</br>
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions</br>
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests</br>
  WHEN I choose a license for my application from a list of options</br>
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under</br>
  WHEN I enter my GitHub username</br>
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile</br>
  WHEN I enter my email address</br>
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions</br>
  WHEN I click on the links in the Table of Contents</br>
  THEN I am taken to the corresponding section of the README
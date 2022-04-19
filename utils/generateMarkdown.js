const licenseObj = {
    Apache: {
      name: "Apache 2.0",
      badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      link: "https://opensource.org/licenses/Apache-2.0"
      },
    Boost: {
      name: "Boost Software 1.0",
      badge: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      link: "https://www.boost.org/LICENSE_1_0.txt"
    },
    BSD: {
      name: "BSD 3-Clause",
      badge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
      link: "https://opensource.org/licenses/BSD-3-Clause"
    },
    CC0: {
      name: "Creative Commons 1.0",
      badge: "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
      link: "http://creativecommons.org/publicdomain/zero/1.0/"
    },
    Eclipse: {
      name: "Eclipse Public 1.0",
      badge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
      link: "https://opensource.org/licenses/EPL-1.0"
    },
    GNU: {
      name: "GNU GPL v3",
      badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
      link: "https://www.gnu.org/licenses/gpl-3.0"
    },
    Hippocratic: {
      name: "Hippocratic 3.0",
      badge: "https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg",
      link: "https://firstdonoharm.dev"
    },
    IBM: {
      name: "IBM Public 1.0",
      badge: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
      link: "https://opensource.org/licenses/IPL-1.0"
    },
    ISC: {
      name: "ISC",
      badge: "https://img.shields.io/badge/License-ISC-blue.svg",
      link: "https://opensource.org/licenses/ISC"
    },
    MIT: {
      name: "MIT",
      badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
      link: "https://opensource.org/licenses/MIT"
    },
    Mozilla: {
      name: "Mozilla Public 2.0",
      badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      link: "https://opensource.org/licenses/MPL-2.0"
    },
    ODC: {
      name: "Open Data Commons Attribution (BY)",
      badge: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg",
      link: "https://opendatacommons.org/licenses/by/"
    },
    Perl: {
      name: "Perl",
      badge: "https://img.shields.io/badge/License-Perl-0298c3.svg",
      link: "https://opensource.org/licenses/Artistic-2.0"
    },
    SIL: {
      name: "SIL Open Font 1.1",
      badge: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg",
      link: "https://opensource.org/licenses/OFL-1.1"
    },
    Unlicense: {
      name: "Unlicense",
      badge: "https://img.shields.io/badge/license-Unlicense-blue.svg",
      link: "http://unlicense.org/"
    },
    WTFPL: {
      name: "Do WTF You Want to Public",
      badge: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
      link: "http://www.wtfpl.net/about/" 
    },
    Zlib: {
      name: "zlib/libpng",
      badge: "https://img.shields.io/badge/License-Zlib-lightgrey.svg",
      link: "https://opensource.org/licenses/Zlib"
    }
}

//conditionally create test information
//conditionally create email contact line
//conditionally create table of contents indices

function renderLicenseBadge(license) {
  if (license ==="None") {
    return "";
  } else {
    return `
    [![License: ${license}](${licenseObj[license].badge})](${licenseObj[license].link})</br>
    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `
  ## License<a name="license"></a>
  This application uses the ${licenseObj[license].name} License. For more information regarding usage, please visit [this link]("${licenseObj[license].link}")
    `
  }
}

function renderContributionsSection(username) {
  if (!username) {
    return "";
  } else {
  const usernameArray = username.split(" ");//add.trim() somewhere
  return `Special thanks to the following contributors:</br>
  ${usernameArray
    .map(element => {
    return `
  [${element}](https://github.com/${element})</br>
    `;
  })
    .join("")}
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  * [Contact](#questions)
  
  ## Installation Instructions<a name="installation"></a>
  ${data.install}
  
  ## Usage Information<a name="usage"></a>
  [${data.title}]("${data.deployedLink}")
  ![${data.title}](${data.imagePath} "${data.title}")
  
  ## Contributions<a name="contributions"></a>
  ${renderContributionsSection(data.creditGitHub)}
  ${data.credit}
  
  Made by [${data.username}](https://github.com/${data.username})
  
  ${renderLicenseSection(data.license)}
  
  ## Tests<a name="tests"></a>
  ${data.test}
  
  ## Questions?<a name="questions"></a>
  Contact repository author ${data.username} at ${data.contact}
  `;
}

module.exports = generateMarkdown;

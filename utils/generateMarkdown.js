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

// conditional table of contents indices
function tocFeatures({features}) {
  if (features) {
    return `* [Features](#features)
    `;
  } else {
    return "";
  }
}

function tocTest({test}) {
  if (test) {
    return `* [Tests](#tests)
    `;
  } else {
    return "";
  }
}

function tocContribute({contribution}) {
  if (contribution) {
    return `* [Contributing](#contributions)
    `;
  } else {
    return "";
  }
}

// conditional features section
function renderFeatureSection({features}) {
  if (features) {
    return `## Features<a name="features"></a>
  ${features}
    `;
  } else {
    return "";
  }
}

// conditional link to deployed application and image of deployed application in usage section
function renderLink({title, deployedLink}) {
  if (deployedLink) {
    return `[${title}]("${deployedLink}")</br>
    `;
  } else {
    return "";
  }
}

function renderImage({title, imagePath}){
  if (imagePath) {
    return `![${title}](${imagePath} "${title}")</br>
    `;
  } else {
    return "";
  }
}

// conditional credits section
function renderCreditsSection({creditGitHub}) {
  if (creditGitHub) {
    const usernameArray = creditGitHub.split(" ");
    return `Special thanks to the following:</br>
    ${usernameArray
      .map(element => {
        element.trim();
        if (element) {
          return `[${element}](https://github.com/${element})</br>`
          ;}
      })
      .join("")}
    `;
  } else {
    return "";
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge({license}) {
  if (license === "None") {
    return "";
  } else {
    return `[![License: ${license}](${licenseObj[license].badge})](${licenseObj[license].link})</br>
    `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({license}) {
  if (license === "None") {
    return "";
  } else {
    return `## License<a name="license"></a>
  This application uses the ${licenseObj[license].name} License. For more information regarding usage, please visit [this link](${licenseObj[license].link}).
    `
  }
}

// conditional tests section
function renderTestSection({test}) {
  if (test) {
    return `## Tests<a name="tests"></a>
    ${test}
    `;
  } else {
    return "";
  }
}

// conditional how to contribute section
function renderContributionsSection({contribution}) {
  if (contribution) {
    return `## Contributing<a name="contributions"></a>
    ${contribution}
    `;
  } else {
    return "";
  }
}

// conditional contact information preference
function renderContactInformation({username, confirmContact, contact}) {
  if (confirmContact) {
    return `via email at [${contact}](mailto:${contact}).
    `;
  } else {
    return `via [GitHub](https://github.com/${username}).
    `;
  }
}

// conditional contact instructions
function renderInstructions({detail}) {
  if (detail) {
    return `${detail}
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}</br>
  ${data.description}
  
  ## Table of Contents
  ${tocFeatures(data)}
  * [Installation](#installation)
  * [Usage Information](#usage)
  * [Authors & Acknowledgements](#credits)
  * [License](#license)
  ${tocTest(data)}
  ${tocContribute(data)}
  * [Contact](#questions)
  
  ${renderFeatureSection(data)}
  
  ## Installation <a name="installation"></a>
  ${data.install}
  
  ## Usage Information<a name="usage"></a>
  ${renderLink(data)}
  ${data.usage}</br>
  ${renderImage(data)}
  
  ## Authors & Acknowledgements<a name="credits"></a>
  ${renderCreditsSection(data)}
  ${data.credit}
  
  Made by [${data.username}](https://github.com/${data.username}).
  
  ${renderLicenseSection(data)}
  
  ${renderTestSection(data)}

  ${renderContributionsSection(data)}
  
  ## Questions?<a name="questions"></a>
  Contact repository author ${renderContactInformation(data)}</br>
  ${renderInstructions(data)}
  `;
}

module.exports = generateMarkdown;

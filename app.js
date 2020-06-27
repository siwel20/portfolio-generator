const inquirer = require('inquirer');
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

const promptUser = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub Username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};

const promptProject = portfolioData => {
  // If there is no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  =================
  Add a New Project
  =================
  `);
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your projects name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please provide a description of your project!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you do this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project.',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('Please enter the link to your GitHub project!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }    
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });





// prior code for reference purposes. 
  // const fs = require('fs');
  // const generatePage = require('./src/page-template.js');


  // const name = profileDataArgs[0];
  // const github = profileDataArgs[1];

  // const printProfileData = profileDataArr => {
  //     for (let i = 0; i < profileDataArr.length; i += 1) {
  //         console.log(profileDataArr[i]);
  //     }
  //         console.log('================');

              // for each does the same thing as the for loop above. 
  //         profileDataArr.forEach(profileItem => console.log(profileItem));
  // };

  // printProfileData(profileDataArgs);

    // fs.writeFile('index.html', generatePage(name, github), err => {
    //   if (err) throw err;
    
    //   console.log('Portfolio complete! Check out index.html to see the output!');
    // });
const inquirer = require('inquirer');
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));



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
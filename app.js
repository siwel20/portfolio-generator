const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// line 2 and 3 do the same thing as line 7. Line 7 is just a simpler way to write it

const [name, github] = profileDataArgs;


// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//         console.log('================');

            // for each does the same thing as the for loop above. 
//         profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

  fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
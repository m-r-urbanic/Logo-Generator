const inquirer = require('inquirer');
const fs = require('fs');

// this is the asyncronous template that will be populated with the users inputs. It also has some canned wording, such as credits, that is the same each time
const generateShape = ({ color, text }) =>
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<polygon points="150, 18 244, 182 56, 182" fill="${color}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>

</svg>`
;

// Create the prompts that the user will see in the command line
inquirer
  .prompt([
    {
        type: 'input',
        name: 'color',
        message: 'Please input a color:',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please input three characters:',
    },

])


// asyncronously retrive the inputs provided by the user and print them to the markdown file
.then((answers) => {
    const readMe = generateShape(answers);
    //create the new readme file
    fs.appendFile('shape.svg', readMe, (err) =>
    err ? console.error(err) : console.log('The shape has been created!')
    );
});

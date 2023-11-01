const inquirer = require('inquirer');
const fs = require('fs');


class SHAPE{

    run(){
        // this is the asyncronous template that will be populated with the users inputs.
        const generateShape = ({ shape,backgroundColor, text, textColor }) =>
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        ${shape}

        <polygon points="150, 18 244, 182 56, 182" fill="${backgroundColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

        </svg>`
        ;

        // Create the prompts that the user will see in the command line
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'backgroundColor',
                message: 'In order to choose a background color, please input a color key word or hexidecimal number:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please choose a shape type:',
                choices: ['Triange','Circle','Square']
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'In order to choose the text color, please input a color key word or hexidecimal number:',
            },
            {
                type: 'input',
                name: 'text',
                message: 'Please input three characters:',
            },

        ])


        // asyncronously retrive the inputs provided by the user and print them to the shape file
        .then((answers) => {
            const readMe = generateShape(answers);
            //create the new readme file
            fs.appendFile('shape.svg', readMe, (err) =>
            err ? console.error(err) : console.log('The shape has been created!')
            );
        });
    }

}

module.exports = SHAPE;
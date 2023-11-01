const inquirer = require('inquirer');
const fs = require('fs');


class SHAPE{

    run(){
        // this is the asyncronous template that will be populated with the users inputs.

        // provide the header. Note: base code for creating svg is from Mozilla, then modified to fit the project. Credits in the README.
        const header = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">`


        // generate the shape if it is a triangle
        const generateTriangle = ({ backgroundColor }) =>
        `
        <polygon points="150, 18 244, 182 56, 182" fill="${backgroundColor}" />
        `

        // generate the shape if it is a square
        const generateSquare = ({ backgroundColor }) =>
        `
        <rect width="200" height="200"  fill="${backgroundColor}" />
        `

        // generate the shape if it is a circle
        const generateCircle = ({ backgroundColor }) =>
        `
        <circle cx="150" cy="100" r="80" fill="${backgroundColor}" />
        `

        // generate the text portion of the logo
        const generateText = ({text,textColor}) =>
        `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

        </svg>
        `
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
            const readMe = header + generateSquare(answers) + generateText(answers);
            //create the new readme file
            fs.appendFile('shape.svg', readMe, (err) =>
            err ? console.error(err) : console.log('The shape has been created!')
            );
        });
    }

}

module.exports = SHAPE;
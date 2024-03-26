const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

let requestedShape = undefined

console.log("Welcome to the SVG Logo Maker")
console.log("Please answer the following questions in order to create your logo:")

const questions = [
    {
        type: 'list',
        name: 'logoShape',
        message: 'What shape would you like the logo to be?',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'What colour would you like the logo to be?'
    },
    {
        type: 'input',
        name: 'logoText',
        message: 'What 3 letters should be on the logo?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What colour would you like the 3 letters be?'
    },
]

function createLogo(data) {

    if (data.logoShape === 'Triangle') {
        requestedShape = new Triangle(data.logoColor, data.logoText, data.textColor)

    } else if (data.logoShape === 'Circle') {
        requestedShape = new Circle(data.logoColor, data.logoText, data.textColor)
    
    }else {
        requestedShape = new Square(data.logoColor, data.logoText, data.textColor)
    
    } return requestedShape.render();

}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
        return console.log("error");
        
    }
        console.log("New Logo Successfully Generated")
        console.log("You Can Now View Your New Logo");
    });
};


function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("./sample/logo.svg", createLogo ((responses)));
    })
};


init();

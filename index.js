// Import and require inquirer and fs packages.
const inquirer = require('inquirer');
const fs = require('fs');

// The code below will enable the specified variable and its contents to be imported from the shapes.js file. 
const {Triangle, Circle, Square} = require('./lib/shapes');

let requestedShape = undefined

// Console logs to prompt the user.
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

// The createLogo function will use the data collected from the Shape Class functions in the shapes.js file to generate the requested shape.
function createLogo(data) {

    if (data.logoShape === 'Triangle') {
        requestedShape = new Triangle(data.logoColor, data.logoText, data.textColor)

    } else if (data.logoShape === 'Circle') {
        requestedShape = new Circle(data.logoColor, data.logoText, data.textColor)
    
    }else {
        requestedShape = new Square(data.logoColor, data.logoText, data.textColor)
    
    } return requestedShape.render();

}

// The following functions allow the data for the new logo to be put presented as an svg file. It will be saved within the "sample" folder. 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
        return console.log("error");
        
    }
        console.log("Successfully Generated 'logo.svg' file.")
        console.log("You can now view your new logo.");
    });
};


function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("./sample/logo.svg", createLogo ((responses)));
    })
};


init();

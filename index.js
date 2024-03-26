const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

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


// The 'Shape' class has been created and acts as a blueprint for any shape variables that are created after it. 
class Shape {
    constructor(logoColor,logoText,textColor) {
        this.logoColor = logoColor;
        this.logoText = logoText;
        this.textColor = textColor; 
    }

// setText and setColor methods are used to set the colour and text of the HTML SVG values. 
  setColor(logoColor) {
    this.logoColor = logoColor;
  }

  setText(logoText, textColor) {
    this.logoText = logoText;
    this.textColor = textColor;
  }

// The render method will rerturn the SVG values that include the data gathered from the user input.  
  render() {
    return `<svg width="300" height="200" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <text x="128" y="128" fill="${this.textColor}" font-size="40" text-anchor="middle">${this.logoText}</text></svg>`
  }

}


// New shapes classes 'Triangle', 'Circle' and 'Square' have been created from the constructor of the 'Shape' class. 
// The new classes inherit the properties of the 'Shape' class due to the 'extends' keyword. 
// The Logo Shape, Colour and Text Colour will be determined by the data gathered from the user input. 
  class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <polygon points="128,0 256,256 0,256" fill="${this.logoColor}" />
        <text x="128" y="170" fill="${this.textColor}" font-size="40" text-anchor="middle">${this.logoText}</text></svg>`;
    }
  }

  class Circle extends Shape {
    render(){
        return`<svg width="300" height="200" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="${this.logoColor}"/>
        <text x="100" y="115" fill="${this.textColor}" font-size="40" text-anchor="middle">${this.logoText}</text></svg>`;
    }
  }

  class Square extends Shape {
    render(){
        return `<svg width="300" height="200" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="60" width="200" height="200" rx="0" ry="5" fill="${this.logoColor}"/>
        <text x="157" y="170" fill="${this.textColor}" font-size="40" text-anchor="middle">${this.logoText}</text></svg>`;
    }
  }

// The new shape classes will be exported to the index.js file. 
module.exports = {Triangle, Circle, Square};
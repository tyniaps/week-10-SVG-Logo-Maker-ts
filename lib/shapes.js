class Shape {
    constructor(logoColor,logoText,textColor) {
        this.logoColor = logoColor;
        this.logoText = logoText;
        this.textColor = textColor; 
    }

  setColor(logoColor) {
    this.logoColor = logoColor;
  }

  setText(logoText, textColor) {
    this.logoText = logoText;
    this.textColor = textColor;
  }

  render() {
    return `<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <text x="128" y="128" fill="${this.textColor}" font-size="40" text-anchor="middle">${this.logoText}</text></svg>`
  }

}

  class Triangle extends Shape {
    render() {
        return `<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <polygon points="128,0 256,256 0,256" fill="${this.logoColor}" />
        <text x="128" y="170" fill="${this.textColor}" font-size="40" text-anchor="middle">${this.logoText}</text></svg>`;
    }
  }

  class Circle extends Shape {
    render(){
        return`<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="${this.logoColor}"/>
        <text x="100" y="115" fill="${this.textColor}" font-size="40" text-anchor="middle">${this.logoText}</text></svg>`;
    }
  }

  class Square extends Shape {
    render(){
        return `<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="60" width="200" height="200" rx="0" ry="5" fill="${this.logoColor}"/>
        <text x="157" y="170" fill="${this.textColor}" font-size="40" text-anchor="middle">${this.logoText}</text></svg>`;
    }
  }

module.exports = {Triangle, Circle, Square};
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

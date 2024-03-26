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
const Shapes = require('./shapes.js');

class Triangle extends Shapes {
// generate the shape if it is a square
render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${backgroundColor}" />`;
    }
}

module.exports = Triangle
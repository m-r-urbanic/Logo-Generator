const Shapes = require('./shapes.js');

class Square extends Shapes {
// generate the shape if it is a square
render() {
    return `<rect width="200" height="200"  fill="${backgroundColor}" />`;
    }
}

module.exports = Square
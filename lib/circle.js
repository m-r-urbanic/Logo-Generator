const SHAPE = require('./shapes.js');

class Circle extends SHAPE {
    render() {
    return `<circle cx="150" cy="100" r="80" fill="${backgroundColor}" />`;

    }
}

module.exports = Circle
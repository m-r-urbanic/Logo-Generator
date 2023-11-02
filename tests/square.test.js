// Constructor shapes is imported.
const Square = require('../lib/square.js');

describe('Square', () => {
    test('should render yellow square', () => {
    backgroundColor = "yellow";
    const shape = new Square();
    const expectedFormat = '<rect width="200" height="200"  fill="yellow" />';
    expect(shape.render()).toEqual(expectedFormat);
    });
  });
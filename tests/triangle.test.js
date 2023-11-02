// Constructor shapes is imported.
const Triangle = require('../lib/triangle.js');

describe('triangle', () => {
    test('should render red triangle', () => {
    backgroundColor = "red";
    const shape = new Triangle();
    const expectedFormat = '<polygon points="150, 18 244, 182 56, 182" fill="red" />';
    expect(shape.render()).toEqual(expectedFormat);
    });
  });
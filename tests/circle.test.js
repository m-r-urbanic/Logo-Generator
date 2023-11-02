// Constructor shapes is imported.
const Circle = require('../lib/circle.js');

describe('Circle', () => {
    test('should render blue circle', () => {
    backgroundColor = "blue";
    const shape = new Circle();
    const expectedFormat = '<circle cx="150" cy="100" r="80" fill="blue" />';
    expect(shape.render()).toEqual(expectedFormat);
    });
  });
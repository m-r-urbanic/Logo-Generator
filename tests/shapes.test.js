// Constructor shapes is imported.
const SHAPE = require('../lib/shapes.js');

describe('Shape', () => {
    test('should render header with the date', () => {
      const expectedHtml = '<polygon points="150, 18 244, 182 56, 182" fill="${backgroundColor}" />';
      const shape = new SHAPE();
      expect(shape.render()).toEqual(expectedHtml);
    });
  });
/* setup.js */
const jsdom = require('jsdom').jsdom;
const { expect } = require('chai');

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(
  (property) => {
    if (typeof global[property] === 'undefined') {
      global[property] = document.defaultView[property];
    }
  }
);

global.expect = expect;

global.navigator = {
  userAgent: 'node.js',
};

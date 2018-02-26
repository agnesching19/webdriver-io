const assert = require('assert');

describe('webdriver.io page', () => {
  it('should have the right title - the fancy generator way', () => {
    browser.url('http://webdriver.io');
    let title = browser.getTitle();
    assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
  });
});

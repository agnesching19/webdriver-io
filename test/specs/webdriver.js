const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

webdriverio
  .remote(options)
  .init()
  .url('http://webdriver.io')
  .getTitle().then((title) => {
    console.log('Title was: ' + title);
  })
  .end()
  .catch((err) => {
    console.log(err);
  })


// const assert = require('assert');

// describe('webdriver.io page', () => {
//   it('should have the right title - the fancy generator way', () => {
//     browser.url('http://webdriver.io');
//     let title = browser.getTitle();
//     assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
//   });
// });

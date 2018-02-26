const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};
const client = webdriverio.remote(options);

client
  .init()
  .url('https://duckduckgo.com')
  .setValue('#search_form_input_homepage', 'WebdriverIO')
  .click('#search_button_homepage')
  .getTitle().then((title) => {
    console.log('Title was: ' + title);
  })
  .end()
  .catch((err) => {
    console.log(err);
  });


// const mocha = require('mocha')
// const describe = mocha.describe
// const it = mocha.it
// const assert = require('chai').assert


// describe('webdriver.io page', function() {
//     it('should have the right title', function () {
//         browser.url('/');
//         var title = browser.getTitle();
//         assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
//     });
// });

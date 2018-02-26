const webdriverio = require('webdriverio');
const assert = require('chai').assert;

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

describe('my awesome website', () => {
  it('should do some chai assertions', () => {
    browser.url('http://webdriver.io');
    browser.getTitle().then((title) => {
      title.should.equal('WebdriverIO - WebDriver bindings for Node.js');
    })
  });
});

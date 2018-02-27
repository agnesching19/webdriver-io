const webdriverio = require('webdriverio');
const assert = require('chai').assert;

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  };
};

const client = webdriverio.remote(options);

client
  .init()
  .url('https://www.dev.fixter.co.uk/')
  .click('.fixter-cta-btn')
  .getTitle().then((title) => {
    console.log('Title was: ' + title);
  })
  .end()
  .catch((err) => {
    console.log(err);
  });

describe('my awesome website', () => {
  it('should render Get a free quote', () => {
    browser.url('https://www.dev.fixter.co.uk/');
    browser.click('.fixter-cta-btn').then((e) => {
      e.should.equal('');
    })
    // browser.getTitle().then((title) => {
    //   title.should.equal('WebdriverIO - WebDriver bindings for Node.js');
    // })
  });
});

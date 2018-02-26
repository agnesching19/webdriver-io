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

const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

webdriverio
  .remote(options)
  .init()
  .url('http://www.google.com')
  .getTitle().then((title) => {
    console.log('Title was: ' + title);
  })
  .end()
  .catch((err) => {
    console.log(err);
  });

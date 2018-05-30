var conf = require('../../nightwatch.conf.BASIC.js')

module.exports = {
  'Demo test todo-list': function (browser) {
    browser
      .url('http://localhost:8080')   // visit the url
      .waitForElementVisible('body') // wait for the body to be rendered
      // add new element "nightwatch" and then test if element is added.
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button', 1000)
      .click('button')
      .pause(1000)
      .assert.containsText('table', 'nightwatch')
      .end();
  }
}

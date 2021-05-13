const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.manomano.co.uk',
      show: false,
      browser: 'chromium',
      waitForNavigation: "networkidle0",
      windowSize: ''
    }
  },
  include: {
    I: './steps_file.js',
    searchPage: './pages/searchPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'mm-challenge-juanjo-garcia-question5',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },

    allure: {}
  }
}
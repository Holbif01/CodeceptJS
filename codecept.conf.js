const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    }, 
    AssertWrapper: {
      "require": "codeceptjs-assert"
    }
  },
  include: {
    ...require('./pages/autoload')
  },
  bootstrap: null,
  mocha: {},
  name: 'codeCeptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    customLocator: {
      enabled: true,
      prefix: '$',
      attribute: 'data-dot'
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
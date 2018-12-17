exports.config = {
  allScriptsTimeout: 10000,
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    './e2e/features/openweather.feature',
  ],

  restartBrowserBetweenTests: false,

  params: {
    pageObjects: require('./e2e/pages/index.js'),
    customTimeout: 5000,
    browserConfig: {
      width: 1280,
      height: 1024
    }
  },

  cucumberOpts: {
    require: [
      './e2e/steps/steps.js',
      './node_modules/protractor-cucumber-steps/index.js',
    ],
    tags: [],
    strict: true,
    'dry-run': false,
    compiler: [],
    format: 'json:reports/results.json',
  },

  multiCapabilities: [{
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      args: ['disable-infobars']
    }
  }],

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
    }
  }],

  onPrepare: function () {
    browser.manage().window().maximize();
    const {Given, Then, When, Before} = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
  }
};

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;


When(/^I navigate to "([^"]*)"$/,  (string) => {
  browser.get(browser.params.baseURL + string);
});

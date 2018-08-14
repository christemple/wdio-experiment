var { Given } = require("cucumber");

Given(/^I go to google$/, function() {
  browser.url("https://www.google.com");
});

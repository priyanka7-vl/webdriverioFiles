const reporter = require('wdio-allure-reporter');
describe('Api Page',function() {
    it('should load',function() {
        browser.url('https://www.google.com/');
        const title = browser.getTitle();
        console.log(`Api page title ${title}`);
    })
})
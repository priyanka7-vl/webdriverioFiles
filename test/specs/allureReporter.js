var allure = require('allure-commandline');
describe('Api Page',function() {
    it('should load',function() {
        browser.url('https://www.google.com/');
        const title = browser.getTitle();
        console.log(`Api page title ${title}`);
    })
    it('should open webdriverio page',function() {
        browser.url("http://www.webdriveruniversity.com/");
        const title1 = browser.getTitle();
        console.log(`University page title is ${title1}`);
    })
})
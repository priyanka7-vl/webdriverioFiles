const LoginPage = require('./loginPage');

describe('login form', () => {
    it('should allow access with correct creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('priyanka.vlr@rapidops.com');
        LoginPage.password.setValue('Violet@657');
        LoginPage.submit();
    })
    it('should check my account page form details',() => {
        browser.$('//span[@class="thumb-sm avatar avatar-6"]').click();
        browser.$('//a[text()="My Account"]').click();
        browser.$('//input[@id ="firstName"]').clearValue();
        browser.$('//input[@id ="firstName"]').setValue("priya");
        browser.$('//input[@id ="lastName"]').setValue("vlr");
        //browser.$('//input[@id ="email"]').clearValue();     
        browser.$('//input[@id ="email"]').setValue("priya@rapidops.com");
        browser.$('//input[@id ="mobile"]').setValue(9870354217);
        browser.$('//ul/li[@data-select2-id="566"]').click();
        browser.$('//li[@data-select2-id="571"]').click();
        browser.$('//li[@data-select2-id="881"]').click();
        browser.$('//input[@id ="nickname"]').clearValue();
        browser.$('//body[@class ="fr-view"]"]').setValue('Hii');
        browser.$('//button[@id ="btnUpdate"]').click();
    })
})
const LoginPage = require('./loginPage');

describe('login form', () => {
    it('should deny access with wrong creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('fake');
        LoginPage.password.setValue('bar');
        LoginPage.submit();
    })

    it('should allow access with correct creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('kalp.shah@rapidops.com');
        LoginPage.password.setValue('123456');
        LoginPage.submit();
    })
})
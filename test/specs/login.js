// const assert = require('assert');

// describe('Login Page',  () => {
//   it('should let you log in', async () => {
//      await browser.url('http://testyourlog.in/example/');
//      const ele = await $('.field');
//      await ele.setValue('input[name="email"]', 'valid@user.com');
//      const ele1 = await $('.field')
//      await ele1.setValue('input[name="password"]', 'hunter2');
//      await browser.submitForm('input[name="email"]');
//     let pageUrl = browser.getUrl();
//     assert.notEqual(pageUrl, 'http://testyourlog.in/example/');
//     assert.equal(pageUrl, 'http://testyourlog.in/example/logged-in.html?email=valid%40user.com&password=hunter2');
//   });
// });

const assert = require('assert');

// describe('Login Page', function () {
//   it('should let you log in', function () {
//     browser.url('/');
//     browser.setValue('input[name="email"]', 'valid@user.com');
//     browser.setValue('input[name="password"]', 'hunter2');
//     browser.submitForm('input[name="email"]');
//     var pageUrl = browser.getUrl();
//     assert.notEqual(pageUrl, 'http://testyourlog.in/example/');
//     assert.equal(pageUrl, 'http://testyourlog.in/example/logged-in.html?email=valid%40user.com&password=hunter2');
//   });
// });
describe('opening youtube',() => {
it('should open youtube',async () => {
    await browser.url('https://www.youtube.com/');
    let inputEle = await $('#search')
    await inputEle.setValue('html');
    let searchEle = await $('#search-icon-legacy')
    await searchEle.click()
    const title = await browser.getTitle();
    console.log(title);
    assert.strictEqual(title,'html-YouTube');
})
});

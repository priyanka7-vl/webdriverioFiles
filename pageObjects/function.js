function Page() {
    this.title = 'My page';
}
Page.prototype.open = function() {
    browser.url("https://kalp.salesmate.io/login.html");
}
module.exports = new Page();
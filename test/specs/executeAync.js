describe('js executor',() => {
it('should execute async JavaScript on the page', () => {
    browser.setTimeout({ script: 5000 })
    const result = browser.executeAsync(function(a, b, c, d, done) {
        setTimeout(() => {
            done(a + b + c + d)
        }, 3000);
    }, 1, 2, 3, 4)
    console.log(result) // outputs: 10
});
})
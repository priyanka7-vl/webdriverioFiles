const assert = require("assert"); 
describe("Lambdatest Demo Test", () => {
    it("Lambdatest Demo TestCase", async () => {
        await browser.url("https://lambdatest.github.io/sample-todo-app/");
        let firstCheckbox = await $("*[name='li1']")
        await firstCheckbox.click();
        let secondCheckbox = await $("*[name='li2']")
        await secondCheckbox.click();
        let value = await $("#sampletodotext")
        await value.setValue("Lambdatest\n");
        
        assert.strictEqual(await browser.getTitle(), "Sample page - lambdatest.com");
        console.log(await browser.getTitle())
        
    });
});
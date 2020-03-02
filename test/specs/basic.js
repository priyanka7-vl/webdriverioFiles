const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://webdriver.io');
        const title = await browser.getTitle();
        console.log('this is my title');
        console.log(title);
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
    it('should have the right heading', async () => {
        await browser.url('https://webdriver.io');
        let title = await $('.projectTitle');
        title = await title.getText();
        console.log('this is my heading');
        console.log(title);
        assert.strictEqual(title, 'WEBDRIVER I/O');
    })
    it('should have the tag line',async () => {
        await browser.url('https://webdriver.io');
        let tagLine = await $('.tagline');
        tagLine = await tagLine.getText();
        console.log('this is a tag line');
        console.log(tagLine);
        assert.strictEqual(tagLine,'Next-gen WebDriver test framework for Node.js');
    })
})
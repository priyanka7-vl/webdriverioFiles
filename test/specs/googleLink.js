const assert = require('assert');

describe('DuckDuckGo search',  () => {
    it('searches for WebdriverIO', async () => {
        await browser.url('https://duckduckgo.com/');

        const input = await $('#search_form_input_homepage')
        await input.setValue('WebdriverIO')
        const inputItem = await $('#search_button_homepage')
        await inputItem.click()

        const title = await browser.getTitle()
        console.log('Title is: ' + title)
    })
})
describe('Google Search', () => {
    it('searches for html', async () => {
        await browser.url('https://www.google.com/')
        const inputEle = await $('.gLFyf');
        await inputEle.setValue('html');
        await browser.elementSendKeys(inputEle.elementId, '\n');
        const title = await browser.getTitle()
        console.log('title is:' +title)
        let link = await $('.LC20lb')
        link = await link.getText();
        console.log(link)
        assert.strictEqual(link,'HTML Tutorial - W3Schools');
        let link1 = await $('h3=HTML For Beginners The Easy Way: Start Learning HTML ...')
        link1 = await link1.getText();
        console.log(link1);
        assert.strictEqual(link1,'HTML For Beginners The Easy Way: Start Learning HTML ...');
    })
    it('searches for css',async () => {
        await browser.url('https://www.google.com');
        const ele = await $('.gLFyf');
        await ele.setValue('css');
        await browser.elementSendKeys(ele.elementId,'\n');
        const title = await browser.getTitle();
        console.log('Title is:'+title);
        let link = await $('.LC20lb');
        link = await link.getText();
        console.log(link);
        assert.strictEqual(link,'CSS Tutorial - W3Schools');
    })
})
const assert = require('assert');

describe('Search input on webdriver.io page', () => {

    it('should search “drag and drop” page',async () => {
      await browser.url('https://webdriver.io');
      const searchInput = await $('#search_input_react')
      await searchInput.setValue('drag and drop')
      //await browser.elementSendKeys(searchInput.elementId,'\n')
      const searchDropdown =await $('.algolia-docsearch-suggestion__main')
      await searchDropdown.click();
      const title = await browser.getTitle();
      console.log(title);
      assert.equal(title, 'dragAndDrop · WebdriverIO');
    });
});
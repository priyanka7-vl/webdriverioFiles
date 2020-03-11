describe('opening salesmate',() => {
    it('should open with google sign-in',async () => {
        await browser.url('https://kalp.salesmate.io/login.html');
        const googleSignin = await browser.$(".glabel");
        const handler1 = await browser.getWindowHandles();
        console.log('Handler1 is:'+handler1);
        await googleSignin.click();
        const handler = await browser.getWindowHandles();
        console.log('Handler is:'+handler);
        const handlerLast = handler[handler.length-1];
        console.log('Last Handler is:'+handlerLast);
        await browser.switchToWindow(handlerLast);
        const email = await browser.$("//input[@id='identifierId']");
        await email.setValue('rapidopsqa@gmail.com');
        const nextButton = await browser.$("//span[@class='RveJvd snByac']");
        await nextButton.click();
        await browser.pause(4000);
        const password = await browser.$("//input[@name='password']");
        await password.setValue("Kalp@123456");
        const nextButton2 = await browser.$("//span[@class='RveJvd snByac']");
        await nextButton2.click();
        await browser.pause(18000);
      })
  
})
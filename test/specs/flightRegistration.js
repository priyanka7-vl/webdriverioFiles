describe('JavascriptExecutor', function () {
    it('login', async () => {
        await browser.url("http://newtours.demoaut.com/");
        const username = await $(`//input[@name='userName']`);
        await username.setValue('kalptest'); 

        const password = await $(`//input[@name='password']`);
        await password.setValue('kalptest');

        const submit = await $("//input[@name='login']");
        await submit.click();

        const radioButton = await $("//input[@value='roundtrip']");
        await radioButton.click();

        const passCount = await $(`//select[@name='passCount']/option[@value="1"]`);
        await passCount.click();

        const deptFrom = await $(`//select[@name='fromPort']/option[@value="San Francisco"]`);
        await deptFrom.click();

        const onMonth = await $(`//select[@name='fromMonth']/option[@value="2"]`);
        await onMonth.click();

        const onDate = await $(`//select[@name='fromDay']/option[@value="7"]`);
        await onDate.click();

        const arriving = await $(`//select[@name='toPort']/option[@value="New York"]`);
        await arriving.click();

        const toMonth = await $(`//select[@name='toMonth']/option[@value="4"]`);
        await toMonth.click();

        const toDay = await $(`//select[@name='toDay']/option[@value="24"]`);
        await toDay.click();

        const service = await $("//input[@value='Coach']");
        await service.click();

        const airLine = await $(`//select[@name='airline']/option[text()="Blue Skies Airlines"]`);
        await airLine.click();

        const findFlightsButton = await $("//input[@name='findFlights']");
        await findFlightsButton.click();

        const blueSky361 = await $("//input[@value='Blue Skies Airlines$361$271$7:10']");
        await blueSky361.click();

        const blueSky631 = await $("//input[@value='Pangea Airlines$632$282$16:37']");
        await blueSky631.click();

        const reserveFlights = await $("//input[@name='reserveFlights']");
        await reserveFlights.click();

        const firstName = await $("//input[@name='passFirst0']");
        await firstName.setValue("Kalp");

        const lastName = await $("//input[@name='passLast0']");
        await lastName.setValue("Shah");

        const meal = await $(`//select[@name='pass.0.meal']/option[@value="VGML"]`);
        await meal.click();

        const cardType = await $(`//select[@name='creditCard']/option[@value="IK"]`);
        await cardType.click();

        const cardNumber = await $("//input[@name='creditnumber']");
        await cardNumber.setValue("07834521780567");

        const expirationDate = await $(`//select[@name='cc_exp_dt_mn']//option[contains(text(),'04')]`);
        await expirationDate.click();

        const expirationMonth = await $(`//select[@name = 'cc_exp_dt_yr']/option[@value="2007"]`);
        await expirationMonth.click();

        const creditFirstName = await $("//input[@name='cc_frst_name']");
        await creditFirstName.setValue("Kalp");

        const creditMidName = await $("//input[@name='cc_mid_name']");
        await creditMidName.setValue("Khan");

        const creditLastName = await $("//input[@name='cc_last_name']");
        await creditLastName.setValue("Shah");

        const billAddress1 = await $("//input[@name='billAddress1']");
        await billAddress1.setValue("304-A Borneas waxgon");

        const billAddress2 = await $("//input[@name='billAddress2']");
        await billAddress2.setValue("Avenue Park Street");

        const billCity = await $("//input[@name='billCity']");
        await billCity.setValue("Chicago");

        const billState = await $("//input[@name='billState']");
        await billState.setValue("New York");

        const billZip = await $("//input[@name='billZip']");
        await billZip.setValue("90567");

        const billCountry = await $(`//select[@name='billCountry']/option[@value="215"]`);
        await billCountry.click();

        const sameCheckbox = await $("//input[@value='checkbox']");
        await sameCheckbox.click();

        const delAddress1 = await $("//input[@name='delAddress1']");
        await delAddress1.setValue("304-A Borneas waxgon");

        const delAddress2 = await $("//input[@name='delAddress2']");
        await delAddress2.setValue("Avenue Park Street");

        const delCity = await $("//input[@name='delCity']");
        await delCity.setValue("Chicago");

        const delState = await $("//input[@name='delState']");
        await delState.setValue("New York");

        const delZip = await $("//input[@name='delZip']");
        await delZip.setValue("90567");

        const delCountry = await $(`//select[@name='delCountry']/option[@value="215"]`);
        await delCountry.click();

        const buyFlightsButton = await $("//input[@name='buyFlights']");
        await buyFlightsButton.click();
        await browser.pause(5000);

    });
});
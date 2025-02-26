import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../support/hooks";
import { HomePage } from "../page_objects/HomePage";
let hpage:HomePage;

Given('I open the login page', async () =>{
    await page.goto("https://www.saucedemo.com/");
    expect(await page.title()).toEqual("Swag Labs");
});


When('I enter valid credentials', async ()=> {
    hpage = new HomePage(page);
    await hpage.enterusernamepassword("standard_user", "secret_sauce");

});



When('I click the login button', async ()=> {
    await hpage.loginBtn();
});



Then('I should see the products page', async ()=> {
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});


When('I enter an incorrect password', async ()=> {
    hpage = new HomePage(page);
    await hpage.enterusernamepassword("ksdjsj", "fsfsfs");
});

Then('I should see the error message', async ()=> {
    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
});

When('I enter the locked credentials', async ()=> {
    hpage = new HomePage(page);
    await hpage.enterusernamepassword("locked_out_user","secret_sauce");
});

Then('I should see the locked account error message', async ()=>{
    expect(await page.locator("h3[data-test='error']").isVisible()).toBeTruthy();
    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.")
});
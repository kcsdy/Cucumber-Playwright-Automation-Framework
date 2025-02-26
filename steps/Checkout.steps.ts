import { Then } from "@cucumber/cucumber";
import { page } from "../support/hooks";
import { CheckoutPage } from "../page_objects/CheckoutPage";
import { expect } from "@playwright/test";

let checkout:CheckoutPage;
Then('I click the Checkout button',async()=>{
    checkout = new CheckoutPage(page)
    await checkout.checkout();
})

Then('I am on checkout page',async()=>{
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
})

Then('I fill up {string} {string} {string} as my checkout information', async (firstname, lastname, zipcode)=> {
    await checkout.checkoutStepOne(firstname,lastname,zipcode);
  });

Then('I click on the continue button', async () =>{
    await checkout.continueBtn();
  });

Then('Verify that the Order Summary page appears', async ()=> {
    await expect(page.locator("span[data-test='title']")).toHaveText("Checkout: Overview")
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
  });

Then('I click on the finish button', async ()=> {
    await checkout.checkoutStepTwo();
  });

Then('Verify that a success message {string} is displayed.', async (success_msg)=> {
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
    await expect(page.locator("[data-test='complete-header']")).toHaveText(success_msg);
  });
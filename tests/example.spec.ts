import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/HomePage';
import { inventory } from '../page_objects/Inventory';
import { CheckoutPage } from '../page_objects/CheckoutPage';

test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    expect( await page.title()).toEqual("Swag Labs");
})

test.only("Login with Standard username & password", async({page})=>{

    const hpage = new HomePage(page);
    await hpage.enterusernamepassword("standard_user","secret_sauce");
    await hpage.loginBtn();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    let filter = "Name (Z to A)";
    const inv = new inventory(page);
    inv.sortingFilter(filter);

    const products = await page.$$("[data-test='inventory-item-name']");
      const product_prices = await page.$$("[data-test='inventory-item-price']");
      const nameArray_actual =[];
      const priceArray_actual =[];
      let array_expected =[];
      for(let i=0;i<products.length;i++)
      {
          let product_name = await products[i].textContent();
          nameArray_actual.push(product_name);
          let product__price = await product_prices[i].textContent();
          priceArray_actual.push(product__price?.substring(1));
  
      }
     
      if(filter==="Name (A to Z)")
     {
          array_expected= nameArray_actual.sort();
          if(JSON.stringify(nameArray_actual) == JSON.stringify(array_expected))
          {
              console.log(filter+"filter is working as expected");
          }
          else{
              console.log(filter+"filter is not working as expected");
          }
     }
     else if (filter==="Name (Z to A)") {
      array_expected = nameArray_actual.sort().reverse();
      if(JSON.stringify(nameArray_actual) == JSON.stringify(array_expected))
          {
              console.log(filter+"filter is working as expected");
          }
          else{
              console.log(filter+"filter is not working as expected");
          }
     } else if(filter==="Price (low to high)"){
      array_expected = priceArray_actual.sort();
      if(JSON.stringify(priceArray_actual) == JSON.stringify(array_expected))
          {
              console.log(filter+"filter is working as expected");
          }
          else{
              console.log(filter+"filter is not working as expected");
          }
      
     } else if(filter==="Price (high to low)"){
      array_expected = priceArray_actual.sort().reverse();
      if(JSON.stringify(priceArray_actual) == JSON.stringify(array_expected))
          {
              console.log(filter+"filter is working as expected");
          }
          else{
              console.log(filter+"filter is not working as expected");
          }
     }

    /*const inv = new inventory(page);
    await inv.addProductToCart("Sauce Labs Bike Light");
    await inv.gotoCart();

    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

    const checkout = new CheckoutPage(page);
    await checkout.checkout();

    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");

    await checkout.checkoutStepOne("K","C","X");
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
    await checkout.checkoutStepTwo();
    
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");

    await expect(page.locator("[data-test='complete-header']")).toHaveText("Thank you for your order!"); */

    

});

test("Login without credentials", async({page})=>{
    
    const hpage = new HomePage(page);
    await hpage.enterusernamepassword("","");

    expect(await page.locator("h3[data-test='error']").isVisible()).toBeTruthy();

    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username is required")
})

test("Login using Locked out credentials", async({page})=>{

    const hpage = new HomePage(page);
    await hpage.enterusernamepassword("locked_out_user","secret_sauce");

    expect(await page.locator("h3[data-test='error']").isVisible()).toBeTruthy();

    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.")
})
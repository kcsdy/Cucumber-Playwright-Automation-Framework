import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../support/hooks";
import { inventory } from "../page_objects/Inventory";
let inv:inventory;
Then('I click the add to cart button of {string} Product', async (product)=> {
        inv= new inventory(page);
        await inv.addProductToCart(product);
  });

  Then('the cart icon updates with {string} item', async (count)=> {
    inv.cartIconUpdate(count);
    
  });


  Then('I go to the cart page', async ()=> {
    await inv.gotoCart();
  });

  Then('verify that {string} product is present', async (product)=> {
    // Write code here that turns the phrase above into concrete actions
    await inv.verifyProductInCart(product);
  });
  

   
Then('I click the remove button and verify that {string} Product is not visible in cart page', async (product)=> {
    await inv.removeProduct(product);
  });


  Then('Select {string} option from the dropdown', async (filter)=> {
    console.log(filter);
    inv= new inventory(page);
      await inv.sortingFilter(filter);
    });
  
  
  Then('Verify that products are in the {string} order', async (filter)=> {
    if(page)
    {
      console.log("page is active");
    }
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

    });

    Then('I open the side menu', async()=>{
        inv = new inventory(page);
        await inv.opensidemenu();
    });

    Then('I click the logout option',async()=>{
      await inv.logout();
    });

    Then('Verify that the user is redirected to the login page',async()=>{
      await expect(page).toHaveURL("https://www.saucedemo.com/");
    })



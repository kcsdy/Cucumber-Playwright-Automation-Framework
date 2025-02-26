import { expect, Page } from "@playwright/test";

export class inventory {
    page:Page;
    constructor(page:Page) {
        this.page =page;
    }

    async addProductToCart(product:string){

        const items =  await this.page.locator(".inventory_item_description");
        const item_titles = await this.page.$$(".inventory_item_description a");
        for (let i = 0; i < item_titles.length; i++) {
            const title = await item_titles[i].textContent();
            
            if(title==product)
            {
                await items.locator("button").nth(i).click();
            }
        }
    }

    async gotoCart(){
        await this.page.locator("a[data-test='shopping-cart-link']").click();
    }
    async verifyProductInCart(product:string){
        
        const cart_items = await this.page.$$("div[data-test='inventory-item-name']");
        for(let i=0;i<cart_items.length;i++)
        {
            const title = await cart_items[i].textContent();
            if(title==product)
            {
                console.log("Product is present!");
            }
        }
    }

    async cartIconUpdate(count:string){
        await expect( this.page.locator("span[data-test='shopping-cart-badge']")).toHaveText(count);
    }

    async removeProduct(product:string){
        const cart_items = await this.page.$$("div[data-test='inventory-item-name']");
        for(let i=0;i<cart_items.length;i++)
            {
                const title = await cart_items[i].textContent();
                if(title==product)
                {
                    await this.page.locator("//button[text()='Remove']").nth(i).click();
                }
            }
        
    }

    async sortingFilter(filter:string)
    {
        await this.page.locator("select[data-test='product-sort-container']").selectOption(filter);
    }

    async opensidemenu(){
        await this.page.locator("#react-burger-menu-btn").click();
    }

    async logout(){
        await this.page.locator("#logout_sidebar_link").click();
    }
}
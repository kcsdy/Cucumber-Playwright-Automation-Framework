import { Page } from "@playwright/test";

export class CheckoutPage{
    page:Page;
    private firstname = "#first-name";
    private lastname = "#last-name";
    private postalcode = "#postal-code";
    private continue = "#continue";
    private finish = "#finish";
    constructor(page:Page)
    {
        this.page = page;
    }

    async checkout(){
        await this.page.locator("#checkout").click();
    }

    async checkoutStepOne(firstName:string,LastName:string,zipcode:string){
        await this.page.fill(this.firstname,firstName);
        await this.page.fill(this.lastname,LastName);
        await this.page.fill(this.postalcode,zipcode);
        
    }

    async continueBtn(){
        await this.page.locator(this.continue).click();
    }

    async checkoutStepTwo(){
        await this.page.locator(this.finish).click();
    }
}
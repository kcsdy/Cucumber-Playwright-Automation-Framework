import { Page } from "@playwright/test";

export class HomePage {
    page :Page;
    private username = "input[data-test='username']";
    private password = "input[data-test='password']";
    private login_btn = "input[data-test='login-button']";
    constructor(page:Page) {
        this.page = page;
    }

    async enterusernamepassword(username:string,password:string) {
        await this.page.fill(this.username,username);
        await this.page.fill(this.password,password);
        
    }

    async loginBtn(){
        await this.page.locator(this.login_btn).click();
    }
}
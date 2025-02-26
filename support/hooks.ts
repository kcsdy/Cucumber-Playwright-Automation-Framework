import { Before , After , BeforeAll, AfterAll,setDefaultTimeout} from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

setDefaultTimeout(60 * 1000);

BeforeAll(async()=>{
    browser = await chromium.launch({headless:false,args: ["--start-maximized"]});
})

Before(async()=>{
    const context = await browser.newContext({ viewport: null });
    page = await context.newPage();
})

After(async()=>{
    await page.close();
})

AfterAll(async()=>{
    await browser.close();
})

export {page};
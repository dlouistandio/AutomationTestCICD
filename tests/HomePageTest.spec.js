const {test, expect} = require('@playwright/test');

test('Home Page', async({page})=>{
   await page.goto('https://www.demoblaze.com/');

   const pageTittle = await page.title();
   console.log('Page title is: ', pageTittle);

   await expect(page).toHaveTitle('STORE');

   await page.close();
})
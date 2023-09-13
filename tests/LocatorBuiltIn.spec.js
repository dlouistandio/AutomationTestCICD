import {test,expect} from '@playwright/test';

test('Built-in locator', async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = await page.getByAltText('orangehrm-logo');
    await expect(logo).toBeVisible();
})
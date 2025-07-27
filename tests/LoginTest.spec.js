const {test, expect} = require('@playwright/test');
const { userName, password } = require('../Utilities/envHelper.js');

test('First Basic UI Interaction Test', async ({page}) => {

    // Define the Element Selectors
    const txt_userName = page.locator('#username');
    const txt_password = page.locator('#password');
    const btn_login = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');

    // Navigate to the login page
    await page.goto('/loginpagePractise/');

    // Assert the title of the page
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    // Fill in the username and password fields
    await txt_userName.fill(userName);
    await txt_password.fill(password);

    // Click the login button
    await btn_login.click();

    // Get the title of the first product and assert it
    const firstProductTitle = await cardTitles.first().textContent();
    await expect(firstProductTitle).toContain('iphone');

    // Get all product titles
    const allProductTitles = await cardTitles.allTextContents();
    console.log('All Product Titles:', allProductTitles);
}),

test('Login with invalid credentials', async ({page}) => {
    
    // Define the Element Selectors
    const txt_userName = page.locator('#username');
    const txt_password = page.locator('#password');
    const btn_login = page.locator('#signInBtn');
    
    // Navigate to the login page
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Fill in the username and password fields with invalid credentials
    await txt_userName.fill('invalidUser');
    await txt_password.fill('invalidPass');

    // Click the login button
    await btn_login.click();

    // Assert that an error message is displayed
    const errorMessage = await page.locator("[style*='block']").textContent();
    await expect(errorMessage).toEqual('Incorrect username/password.');
});
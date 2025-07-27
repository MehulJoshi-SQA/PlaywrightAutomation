const {test, expect} = require('@playwright/test');
const { generateRandomUser } = require('../Utilities/DataGenerator');

test('Register and Login Test', async ({page}) => {

    // Generate random user data
    const user = generateRandomUser();

    // Define the Element Selectors
    const btn_HomeRegister = page.locator("[href*='register']");
    const txt_firstName = page.locator('#firstName');
    const txt_lastName = page.locator('#lastName');
    const txt_email = page.locator('#userEmail');
    const txt_phoneNumber = page.locator('#userMobile');
    const drp_Occupation = page.locator("[formcontrolname='occupation']");
    const rd_Gender = page.locator("[value='Male']");
    const txt_regPassword = page.locator('#userPassword');
    const txt_cnfPassword = page.locator('#confirmPassword');
    const btn_Register = page.locator('#login');
    const btn_login = page.getByText('Login');
    const chk_Aggree = page.locator("[type='checkbox']");
    const cardTitles = page.locator('.card-body a');

    // Navigate to the login page
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    // Assert the title of the page
    await expect(page).toHaveTitle("Let's Shop");

    // Click the Register button
    await btn_HomeRegister.click();
    
    // Enter the registration details
    await txt_firstName.fill(user.firstName);
    await txt_lastName.fill(user.lastName);
    await txt_email.fill(user.email);
    await txt_phoneNumber.fill(user.phoneNumber);
    await drp_Occupation.selectOption('Student');
    await rd_Gender.check();
    await txt_regPassword.fill(user.password);
    await txt_cnfPassword.fill(user.password);
    await chk_Aggree.check();

    // Click the Register button
    await btn_Register.click();

    // Click the Login button
    await btn_login.click();
})
const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('PlayWright Vanilla JS - 4', () => {
  test('Test Scenario 3 - Input Form Submit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //test.setTimeout(1200000); // 120 seconds

  await page.goto('https://www.testmuai.com/selenium-playground/');
  //await page.waitForTimeout(3000); // 

  await page.getByText('Input Form Submit').click();
//await page.waitForTimeout(3000); // 
  // Submit empty form
  await page.getByRole('button', { name: 'Submit' }).click();
//await page.waitForTimeout(3000); // 
  await expect(page.locator('#name')).toHaveAttribute('required', '');
//await page.waitForTimeout(3000); // 
  // Fill form
  await page.fill('#name', 'Ajay Tester');
  //await page.waitForTimeout(3000); // 
  await page.fill('#inputEmail4', 'ajay@test.com');
 // await page.waitForTimeout(3000); // 
  await page.fill('#inputPassword4', 'Password123');
  //await page.waitForTimeout(3000); // 
  await page.fill('#company', 'TestMu AI');
  //await page.waitForTimeout(3000); // 
  await page.fill('#websitename', 'https://test.com');
  //await page.waitForTimeout(3000); // 

  await page.selectOption('select[name="country"]', {
    label: 'United States'
  });
//await page.waitForTimeout(3000); // 
  await page.fill('#inputCity', 'New York');
  //await page.waitForTimeout(3000); // 
  await page.fill('#inputAddress1', 'Street 1');
  //await page.waitForTimeout(3000); // 
  await page.fill('#inputAddress2', 'Street 2');
  //await page.waitForTimeout(3000); // 
  await page.fill('#inputState', 'NY');
  //await page.waitForTimeout(3000); // 
  await page.fill('#inputZip', '10001');
  //await page.waitForTimeout(3000); // 

  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.waitForTimeout(3000); // 

  await expect(
    page.getByText('Thanks for contacting us, we will get back to you shortly.')
  ).toBeVisible();

  })
})

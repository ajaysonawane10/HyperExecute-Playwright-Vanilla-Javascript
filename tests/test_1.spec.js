const { test, expect } = require('@playwright/test');

test('Test Scenario 1 - Simple Form Demo', async ({ page }) => {
   

  const message = 'Welcome to TestMu AI';

  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.waitForTimeout(3000); // 

  await page.getByText('Simple Form Demo').click();
  await page.waitForTimeout(3000); // 

  await expect(page).toHaveURL(/simple-form-demo/);
  await page.waitForTimeout(3000); // 

  await page.getByPlaceholder('Please enter your Message').fill(message);
  await page.waitForTimeout(3000); // 

  await page.getByRole('button', { name: 'Get Checked Value' }).click();
  await page.waitForTimeout(3000); // 

  await expect(page.locator('#message')).toHaveText(message);
  
});

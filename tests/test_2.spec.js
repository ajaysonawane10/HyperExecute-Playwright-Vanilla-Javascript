const { test, expect } = require('@playwright/test');

test('Test Scenario 2 - Drag & Drop Slider', async ({ page }) => {

  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.waitForTimeout(3000); // 

  await page.getByText('Drag & Drop Sliders').click();
await page.waitForTimeout(3000); // 
  const slider = page.locator('input[value="15"]');
await page.waitForTimeout(3000); // 
  await slider.evaluate((el) => {
    el.value = '95';
    el.dispatchEvent(new Event('input'));
  });
  await page.waitForTimeout(3000); // 

  await expect(slider).toHaveValue('95');
  await page.waitForTimeout(3000); // 
});

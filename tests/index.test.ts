import {test, expect} from '@playwright/test';

test('basic test', async ({page}) => {
  await page.goto('http://localhost:1234/');

  await page.waitForResponse('http://localhost:8888/items/12?q=sdf');
  const clickedCount = await page.innerText('data-testid=clicked-count');

  expect(clickedCount).toBe('You clicked 12 times');
});
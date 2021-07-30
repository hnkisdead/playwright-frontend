import {test, expect} from '@playwright/test';

test('basic test', async ({page}) => {
  await page.goto('http://localhost:8000/docs');
  const name = await page.innerText('data-testid=application');
  expect(name).toBe('Application');
});
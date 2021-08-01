import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'playwright',
  reporter: [
    ['line'],
    ['junit', {outputFile: 'results.xml'}]
  ],
};
export default config;

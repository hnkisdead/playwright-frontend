import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [
    ['line'],
    ['junit', {outputFile: 'results.xml'}]
  ],
};
export default config;

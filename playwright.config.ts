import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd'; //
import * as dotenv from 'dotenv'; 
import path from 'path';


dotenv.config({ path: path.resolve(__dirname, '.env') }); 

const testDir = defineBddConfig({
  paths: ['src/test/features/**/*.feature'], 
  importTestFrom: 'src/test/steps/loginSteps.ts', 
});

export default defineConfig({
  testDir, 
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    screenshot: 'on', 
    video: 'on-first-retry',
  },
});
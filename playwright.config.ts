import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd'; //
import * as dotenv from 'dotenv'; // Use this import style for better compatibility
import path from 'path';

// Load .env file properly using absolute path
dotenv.config({ path: path.resolve(__dirname, '.env') }); 

const testDir = defineBddConfig({
  paths: ['src/test/features/**/*.feature'], // Path to your features
  importTestFrom: 'src/test/steps/loginSteps.ts', // Adjust this to your custom test file if needed
});

export default defineConfig({
  testDir, // Use the generated test directory
  reporter: 'html',
  use: {
    screenshot: 'on',
    video: 'on-first-retry',
  },
});
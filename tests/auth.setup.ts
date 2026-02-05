import { test as setup, expect } from '@playwright/test';
import path from 'path';

const recruiterFile = path.join(__dirname, '../playwright/.auth/recruiter.json');
//const candidateFile = path.join(__dirname, '../playwright/.auth/candidate.json');

setup('Authenticate as recruiter', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  // Perform login steps
  await page.goto('https://www.linkedin.com/login');
  await page.locator('#username').fill('mailtestftel@gmail.com')
  await page.locator('#password').fill('leo@7896')
  await page.locator('button[aria-label="Sign in"]').click()
  // Wait for authentication to complete
  await page.waitForURL('https://www.linkedin.com/feed/');
  // Save storage state to file
  await page.context().storageState({ path: recruiterFile });
});

// setup('Authenticate as candidate', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//   // Perform login steps
//   await page.goto('https://www.linkedin.com/login');
//   await page.locator('#username').fill('mailtestftel@gmail.com')    
//   await page.locator('#password').fill('leo@7896')
//   await page.locator('button[aria-label="Sign in"]').click()
//   // Wait for authentication to complete
//   await page.waitForURL('https://www.linkedin.com/feed/');
//   // Save storage state to file
//   await page.context().storageState({ path: candidateFile });
// });
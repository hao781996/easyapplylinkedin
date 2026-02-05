Prerequisites:
  Before setting up the project, ensure you have the following installed:
  Node.js: version 18 or higher (Download here)
  VS Code: Recommended IDE with the Playwright Test for VSCode extension.

Getting Started:
1. Clone the Repository
     git clone <your-repository-url>
     cd <project-folder-name>
2. Install Dependencies
Install all required npm packages: npm install

3. Install Playwright Browsers
Install the necessary browser binaries (Chromium, Firefox, WebKit): npx playwright install

Running Tests
You can run tests via the Command Line Interface (CLI):
  Run all tests (Headless mode): npx playwright test
Run tests on a specific browser/project:
    npx playwright test --project="chromium"
    npx playwright test --project="Mobile Safari"
Open Playwright UI Mode: npx playwright test --ui

Reporting
  After running the tests, view the interactive HTML report: npx playwright show-report


Structure of project:
playwright-framework/
├── .github/workflows/      # CI/CD Pipeline (GitHub Actions)
├── tests/                  # contain test script (.spec.ts)
├── page_objects/           # Page Object Model classes
├── test_files/             # Test data files (JSON/CSV)
├── playwright.config.ts    # Global configuration
└── package.json            # Project scripts and dependencies

CI/CD Integration:
Create a folder .gitHub/workflows in the root of the project
Inside .gitHub/workflows folder -> create a file called playwright.yml
Paste this content to playwright.yml

name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v5
    - uses: actions/setup-node@v5
      with:
        node-version: lts/*
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v4
      if: ${{ !cancelled() }}
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30

Replace this block  
    - uses: actions/upload-artifact@v4
      if: ${{ !cancelled() }}
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30

by
- name: Upload Test Reports & Logs
      uses: actions/upload-artifact@v4
      if: always() 
      with:
        name: playwright-report-artifacts
        path: |
          test-execution.log
          screenshots/
          playwright-report/
          failure-screenshot.png
        retention-days: 30




Create a repository on GitHub

In VSCode Terminal, use these commands to push code to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/hao781996/easyapplylinkedin.git
git push -u origin main

Then check the source code on https://github.com/hao781996/easyapplylinkedin -> code is pushed

Click the tab Action on GitHub > wait until the workflow is done





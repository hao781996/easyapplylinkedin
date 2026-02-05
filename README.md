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



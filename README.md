🥒 Cucumber-Playwright Automation Framework
🚀 Overview
This is a Cucumber-Playwright Automation Framework designed for end-to-end (E2E) web testing. It leverages Cucumber for Behavior-Driven Development (BDD) and Playwright for fast, reliable, and scalable test automation across multiple browsers.

The framework is structured using the Page Object Model (POM) for better test maintainability and includes a CI/CD pipeline with GitHub Actions to ensure automated test execution on every push or pull request.

🎯 Features
✅ Cucumber Integration – Write test scenarios in human-readable Gherkin syntax.
✅ Playwright for Web Automation – Fast, reliable, and cross-browser automation.
✅ Page Object Model (POM) Implementation – Enhances test maintainability and reusability.
✅ Configurable Test Execution – Customize test runs with environment variables and configuration files.
✅ Detailed Reporting – Generate reports to analyze test execution.
✅ CI/CD with GitHub Actions – Automated test execution on every push or pull request using GitHub Actions.

🛠️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/kcsdy/Cucumber-Playwright-Automation-Framework.git
cd Cucumber-Playwright-Automation-Framework

2️⃣ Install Dependencies
Make sure you have Node.js installed. Then, install the required packages:
npm install

3️⃣ Run Tests
▶ Run All Tests
npm test

▶ Run Tests in a Specific Browser
Run tests in Chrome:
npx playwright test --browser=chromium
Run tests in Firefox:
npx playwright test --browser=firefox

▶ Run a Specific Feature File
npx cucumber-js features/example.feature

4️⃣ View Test Reports
After execution, reports can be found in the reports/ directory.

🔄 CI/CD with GitHub Actions
This framework includes a GitHub Actions CI/CD pipeline (.github/workflows/test.yml) that:
✅ Automatically runs tests on every push or pull request
✅ Executes tests in a headless environment
✅ Ensures test reliability before merging changes

Manually Trigger GitHub Actions
Push your changes:
git add .
git commit -m "Updated tests"
git push origin main
This will automatically trigger the GitHub Actions workflow, running the latest tests.

📁 Project Structure
Cucumber-Playwright-Automation-Framework/
│-- features/             # Feature files (BDD scenarios)
│-- step-definitions/     # Step definitions for Cucumber scenarios
│-- pages/                # Page Object Model (POM) implementations
│-- reports/              # Test execution reports
│-- .github/workflows/    # CI/CD GitHub Actions workflow
│-- package.json          # Project dependencies & scripts
│-- playwright.config.js  # Playwright configuration file
│-- README.md             # Project documentation
🤝 Contributing
Contributions are welcome! Feel free to fork the repository, submit issues, or open pull requests.

📄 License
This project is licensed under the MIT License – free to use and modify.

📢 Connect with Me
💬 Have feedback or suggestions? Feel free to reach out or connect on LinkedIn!

🚀 Check out the project: GitHub Repository

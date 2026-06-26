# Playwright Test Automation Framework - Copilot Configuration

## Context
This is a Playwright test automation framework using TypeScript with:
- Multi-browser support (Chrome, Firefox, Edge)
- Page Object Model pattern
- HTML, JUnit, and Allure reporting
- GitHub Actions CI/CD integration

## Available Commands via GitHub Copilot

You can use the following GitHub MCP commands with `@github` in the chat:

### Repository Operations
- **Create issues**: `@github create issue`
- **View issues**: `@github list issues`
- **Create pull requests**: `@github create pull request`
- **View pull requests**: `@github list pull requests`
- **View commits**: `@github view commits`
- **Search code**: `@github search code`

### Branch Management
- **Create branch**: `@github create branch [branch-name]`
- **List branches**: `@github list branches`
- **Merge PR**: `@github merge pull request [PR-number]`

### Repository Information
- **Get repo details**: `@github show repository`
- **List collaborators**: `@github list collaborators`
- **View releases**: `@github show releases`

## Example Usage

In GitHub Copilot Chat, you can use:

```
@github create issue title:"Bug: Tests failing in Firefox" body:"Fix timeout issues in Firefox tests"
```

```
@github create pull request title:"Fix: Improve test timeouts" head:"feature/improve-timeouts" base:"main"
```

```
@github create branch feature/new-test-cases
```

## Project Structure for Reference
- `tests/e2e/`: End-to-end test specs
- `tests/pages/`: Page Object definitions
- `tests/support/`: Test data and utilities
- `.github/workflows/`: CI/CD workflows
- `playwright.config.ts`: Playwright configuration

## Recommended Workflow

1. Use `@github create branch` to create feature branches
2. Develop tests locally
3. Use `@github create pull request` when ready
4. CI/CD runs automatically via GitHub Actions
5. Use `@github merge pull request` after review

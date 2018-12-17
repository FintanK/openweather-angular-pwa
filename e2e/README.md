# E2E Automation

This test suite uses Protractor, Cucumber and Gherkin in order to automate our end to end testing.

**Make sure you close all chrome browser windows before running the tests**

# Installation


Install Node.js

Run 

```
npm install
webdriver-manager update --ie
```

In the root directory.

# Development

Create a new .feature file in the tests/features folder and use the following documentation to
build our test steps

https://github.com/Marketionist/protractor-cucumber-steps#list-of-predefined-steps


# E2E / Behavioural Tests

You will need to make sure your application is running on your local server (ng serve)

In one terminal run

```
npm run e2e
```

and then in another terminal run

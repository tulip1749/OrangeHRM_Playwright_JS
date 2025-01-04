// Generated from: Features\Dashboard\PIM\Login\Login.feature
import { test } from "playwright-bdd";

test.describe('Verify login functionality', () => {

  test('To verify successful login to the application', async ({ Given, When, Then, page }) => { 
    await Given('I have launched the web url and I am on the login page'); 
    await When('I provide valid credentials'); 
    await Then('I am logged in to the web application', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('Features\\Dashboard\\PIM\\Login\\Login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
]; // bdd-data-end
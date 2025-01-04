Feature: Verify login functionality

Scenario: To verify successful login to the application
    Given I have launched the web url and I am on the login page
    When I provide valid credentials
    Then I am logged in to the web application
Feature: Login Functionality

Scenario: Login with valid credentials
    Given I open the login page 
    When I enter valid credentials
    And I click the login button
    Then I should see the products page

Scenario: Login with Incorrect password
    Given I open the login page
    When I enter an incorrect password
    And I click the login button
    Then I should see the error message

Scenario: Login with Locked credentials
    Given I open the login page
    When I enter the locked credentials
    And I click the login button
    Then I should see the locked account error message   
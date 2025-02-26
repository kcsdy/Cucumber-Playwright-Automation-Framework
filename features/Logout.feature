Feature: Logout Functionality

Scenario: Verify that a user can log out successfully
Given I open the login page
When I enter valid credentials
And I click the login button
Then I should see the products page
Then I open the side menu
Then I click the logout option
Then Verify that the user is redirected to the login page 
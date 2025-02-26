Feature: Checkout Process

Scenario: Proceed to Checkout
    Given I open the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page
    Then I click the add to cart button of "Sauce Labs Bike Light" Product
    And I go to the cart page
    And I click the Checkout button
    And I am on checkout page

Scenario: Complete the Checkout Process
    Given I open the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page
    Then I click the add to cart button of "Sauce Labs Bike Light" Product
    And I go to the cart page
    And I click the Checkout button
    And I am on checkout page
    And I fill up "K" "C" "D" as my checkout information
    And I click on the continue button
    And Verify that the Order Summary page appears
    And I click on the finish button
    And Verify that a success message "Thank you for your order!" is displayed.
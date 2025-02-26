Feature: Shopping Cart Functionality

  Scenario: Add a Product to the Cart
    Given I open the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page
    Then I click the add to cart button of "Sauce Labs Bike Light" Product
    And the cart icon updates with "1" item
    And I go to the cart page
    And verify that "Sauce Labs Bike Light" product is present

  Scenario: Remove a Product from the Cart
    Given I open the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page
    Then I click the add to cart button of "Sauce Labs Bike Light" Product
    Then I go to the cart page
    Then I click the remove button and verify that "Sauce Labs Bike Light" Product is not visible in cart page

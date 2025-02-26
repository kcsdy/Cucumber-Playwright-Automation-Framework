Feature: UI and Sorting Validations

  Scenario: Verify Product Sorting Functionality Name (A to Z)
    Given I open the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page
    Then Select "Name (A to Z)" option from the dropdown
    Then Verify that products are in the "Name (A to Z)" order

  Scenario: Verify Product Sorting Functionality Name (Z to A)
    Given I open the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page
    Then Select "Name (Z to A)" option from the dropdown
    Then Verify that products are in the "Name (Z to A)" order


  Scenario: Verify Product Sorting Functionality Price (low to high)
    Given I open the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page
    Then Select "Price (low to high)" option from the dropdown
    Then Verify that products are in the "Price (low to high)" order  

  Scenario: Verify Product Sorting Functionality Price (high to low)
    Given I open the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page
    Then Select "Price (high to low)" option from the dropdown
    Then Verify that products are in the "Price (high to low)" order   


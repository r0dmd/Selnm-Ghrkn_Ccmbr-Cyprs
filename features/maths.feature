Feature: Arithmetic Operations
  As a user
  I want to perform basic arithmetic operations
  So that I can do simple calculations

  Scenario: Addition of two numbers
    Given I have two numbers 5 and 3
    When I add them together
    Then I should get the result 8

  Scenario: Subtraction of two numbers
    Given I have two numbers 10 and 4
    When I subtract one from the other
    Then I should get the result 6
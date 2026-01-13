@Login @ForgotUsername
Feature: Login and User Recovery

  @Login
  Scenario: Verify successful login
    Given user is on login page
    When user logs in using default credentials
    Then user should be logged in successfully

  @ForgotUsername
  Scenario: Verify forgot username screen UI and content
    Given user is on login page
    When user clicks on the "Forgot Username" link
    Then user should see the "Enter Email Address" field
    And user should see the "Next" button
    When user enters recovery email "rsisodiya@welldocinc.com"
    And user clicks the "Next" button
    Then user clicks on "Return to Login"
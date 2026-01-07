@Login
Feature: Login

Scenario: Verify successful login
  Given user is on login page
  When user logs in using default credentials
  Then user should be logged in successfully


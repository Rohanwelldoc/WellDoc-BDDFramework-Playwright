@Login @ForgotUsername
Feature: Login and User Recovery

  Background:
    Given user is on login page

  @Login @TC_LOGIN_ID_01
  Scenario: Verify successful login
    When user logs in using default credentials
    Then user should be logged in successfully

  @ForgotUsername @TC_LOGIN_ID_03
  Scenario: Verify forgot username screen UI and content
    When user clicks on the "Forgot Username" link
    Then user should see the "Enter Email Address" field
    And user should see the "Next" button
    When user enters recovery email "rsisodiya@welldocinc.com"
    And user clicks the "Next" button
    Then user clicks on "Return to Login"

  @ForgotUsername @TC_LOGIN_ID_04
  Scenario: Verify customer care number on forgot username screen
    When user clicks on the "Forgot Username" link
    Then user should see customer care number "-888-327-5345"

  @QuickLinks @TC_LOGIN_ID_15
  Scenario: Verify quick links and footer text on Forgot Username screen
    When user clicks on the "Forgot Username" link
    Then user should see all quick links
    And user should see welldoc footer text

  @AddPatient @TC_ID_18
  Scenario: Verify user can click on Add Patient button
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed

  @AddPatient @TC_ID_20
  Scenario: Verify fields on Add New Patient page
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    And user should see all fields on Add New Patient page

  @AddPatient @TC_ID_21
  Scenario: Verify fields on Add New Patient page
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    And user should see Cancel and Continue buttons

  @AddPatient @TC_ID_22
  Scenario: Verify user can select any one gender option
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    Then user should be able to select each gender option

  @AddPatient @TC_ID_28
  Scenario: Verify user can select diabetes type
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    When user opens Diabetes Type section
    Then user should be able to select diabetes type options

  @AddPatient @TC_ID_30
  Scenario: Verify user can view and select multiple other conditions
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    When user opens Diabetes Type section
    Then user should be able to select diabetes type options

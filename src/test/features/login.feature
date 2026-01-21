@Login @ForgotUsername
Feature: Login and User Recovery

  Background:
    Given user is on login page

  @Login @TC_ID_01 @smoke @regression
  Scenario: Verify successful login
    When user logs in using default credentials
    Then user should be logged in successfully

  @ForgotUsername @TC_ID_03 @regression
  Scenario: Verify forgot username screen UI and content
    When user clicks on the "Forgot Username" link
    Then user should see the "Enter Email Address" field
    And user should see the "Next" button
    When user enters recovery email "rsisodiya@welldocinc.com"
    And user clicks the "Next" button
    Then user clicks on "Return to Login"

  @ForgotUsername @TC_ID_04
  Scenario: Verify customer care number on forgot username screen
    When user clicks on the "Forgot Username" link
    Then user should see customer care number "-888-327-5345"

  @QuickLinks @TC_ID_15
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
  Scenario: Verify user can select any one gender option as CareManagement user
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    Then user should be able to select each gender option

  @AddPatient @TC_ID_28
  Scenario: Verify user can select diabetes type as CareManagement user
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    When user opens Diabetes Type section
    Then user should be able to select diabetes type options

  @AddPatient @TC_ID_30
  Scenario: Verify user can view and select multiple other conditions section as CareManagement user
    Given user is logged into Management Portal as CareManagement user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    When user opens Diabetes Type section
    Then user should be able to select other conditions tag
    Then user should be able to select other conditions options

  @AddPatient @TC_ID_31
  Scenario: Validate Sleep Apnea option behavior based on disease selection
    Given user is logged into Management Portal as HCP user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    Then sleep apnea option should be disabled by default
    When user does not select any disease condition
    Then sleep apnea option should be disabled
    When user selects "None" as diabetes type
    Then sleep apnea option should be disabled
    When user selects diabetes type "Type 1"
    Then sleep apnea option should be enabled
    When user deselects diabetes type
    Then sleep apnea option should be enabled

  @AddPatient @TC_ID_33
  Scenario: user is logged into Management Portal as HCP user and verify info message on addd patient page.
    Given user is logged into Management Portal as HCP user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    Then user should see info message on Add Patient page

  @AddPatient @TC_ID_36 @TC_ID_37
  Scenario: user is logged into Management Portal as HCP user and verify Add Patient button functionality
    Given user is logged into Management Portal as HCP user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed

  @AddPatient @TC_ID_44
  Scenario: Verify user can select any one gender option  as HCP user and verify gender functionality
    Given user is logged into Management Portal as HCP user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    Then user should be able to select each gender option

  @AddPatient @TC_ID_45
  Scenario: Verify user can select multiple other conditions section as HCP user
    Given user is logged into Management Portal as HCP user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    Then user should be able to select other conditions tag
    Then user should be able to select other conditions options

  @AddPatient @TC_ID_70
  Scenario: Verify user can navigate between tabs in Add Patient screen as HCP user
    Given user is logged into Management Portal as HCP user
    And user is on Patient List screen
    When user clicks on Add Patient button
    Then Add Patient screen should be displayed
    Then click on any tab in Add Patient screen like actionitems
    Then pop up message should display
    Then user click on yes user naviagate to action item tab
    Then click on Patients tab
    Then user is on Patient List screen
    When user clicks on Add Patient button
    Then click on any tab in Add Patient screen like actionitems
    Then pop up message should display
    Then user click on no
    Then Add Patient screen should be displayed

  @AddPatient @TC_ID_168
  Scenario: Verify user able to verify the Logout from profile section right side as HCP user
    Given user is logged into Management Portal as HCP user
    When user opens profile menu
    Then user clicks on Logout option
    Then user clicks on Login from logout screen
    Then login page should be displayed
  
   @AddPatient @TC_ID_169
  Scenario: Verify user able to verify the Logout from profile section right side as CareManagement user
    Given user is logged into Management Portal as CareManagement user
    When user opens profile menu
    Then user clicks on Logout option
    Then user clicks on Login from logout screen
    Then login page should be displayed
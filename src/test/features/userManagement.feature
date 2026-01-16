@UserManagement
Feature: User Management

Background:
  Given user is on login page
  And user logs in using default credentials
 
@Login @TC_ID_1007
Scenario: Add a new user
  Given user navigates to the User Management section
  And user clicks on the Add User button
  And user selects the first checkbox
   And user selects the second checkbox
  And user enters first name "RohanTest"
  And user enters last name "RohanTest"
  And user selects role "Account Admin"
  And user enters email "rohansingh121@welldocinc.com"
  And user enters password "welldoc123"
  And user re-enters password "welldoc123"
  And user enters mobile number "798-760-5804"
  And user submits the Add User form
  Then user dismisses the confirmation popup


  @Login @TC_ID_1008
Scenario: Add a new user
  Given user navigates to the User Management section
  And user clicks on the Add User button
  And user selects the first checkbox
  And user selects the second checkbox
  And user enters user details from test data "TC_ID_1008"
  And user submits the Add User form
  Then user dismisses the confirmation popup


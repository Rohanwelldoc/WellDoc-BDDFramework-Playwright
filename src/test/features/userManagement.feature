@UserManagement
Feature: User Management

  Background:
    Given user is on login page
    And user logs in using welldocsu and welldoc123

  Scenario: Verify system support for specific care management roles
    Given user navigates to the User Management section
    And user clicks on the Add User button
    When user selects an account from the dropdown
    Then the role dropdown should contain the following roles:
      | Role                    |
      | Super Admin             |
      | Operational User        |
      | Account Admin           |
      | Supervisor Case Manager |
      | Case Manager            |
      | Xealth Case Manager     |
      | Prescribing Provider    |
@Assignment
Feature: Assignment Management

  Background:
    Background:
  Given the user is logged into WellDoc CMP with username welldocsu and password welldoc123

  @Smoke @TabVerification
  Scenario: Verify Pending and Reassign tabs are visible
    When the user navigates to the "Assignment" header tab
    Then the "Pending Assignment" and "Reassign" tabs should be visible

  @Regression @PatientAssignment
  Scenario: Assign a patient to a care team
    When the user navigates to the "Assignment" header tab
    And the user selects 2 patients from the list
    And the user clicks the Next button
    And the user selects a member from the Care Team
    And the user clicks Assign
    Then the patient should be assigned successfully

  @Regression @Patterns
  Scenario Outline: Validate condition hover text patterns
    When the user navigates to the "Assignment" header tab
    And the user selects "Select All" from the account dropdown
    Then the "Condition" tab should be visible
    And the condition hover text should match pattern type "<patternType>"
    
    Examples:
      | patternType |
      | 1           |
      | 2           |
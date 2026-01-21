@Help
Feature: User Management


 @TC_ID_631
 Scenario: Verify user able to verify the customer care number under help from profile section as HCP user
    Given user is logged into Management Portal as HCP user
    When user opens profile menu
    Then user should see Help section under profile information


@TC_ID_637
 Scenario: Verify user able to verify the help from profile section right side as HCP user
    Given user is logged into Management Portal as HCP user
    When user opens profile menu
    Then user should see Help section under profile information
    Then user should click on Help section under profile information
     Then user should see customer care number "-888-327-5345"


@TC_ID_638
Scenario: Verify About section options under Help
  Given user is logged into Management Portal as HCP user
  When user opens profile menu
   Then user should see Help section under profile information
    Then user should click on Help section under profile information
  Then application should display the following options in About section:
    | About |
    | Welldoc® |
    | UDI Image           |
    | Manufacturer Info  |
    | © Copyright        |
    |  Build        |
    | version  |
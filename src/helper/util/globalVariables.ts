export const GlobalVariables = {
  /* Application URLs */
  DOMAIN_URL: "https://azqa32-dsm.testwd.com",
  QUARTZ_DOMAIN_URL: "https://wd-az-asp-qa32-timerfunction.azurewebsites.net",
  ACCOUNT_CODE: "testauto",
  PROJECT_NAME: "Welldoc",

  // ✅ FIXED: BASE_URL must be ONLY a URL
  BASE_URL: "https://azqa32-dsm.testwd.com/CarePortal/login",
  BASE_QUARTZ_URL: "https://wd-az-asp-qa32-timerfunction.azurewebsites.net/api/",

  /* Mobile Automation (Kept for reference. Playwright does NOT use these) */
  SERVER_URL: "http://127.0.0.1:4723/wd/hub",
  PLATFORM_NAME: "android",
  UDID: "9834FAC3-658E-425D-BB5B-EC4A234F9D26",
  DEVICE_NAME: "Android_Device",
  SYSTEM_DETAILS: "Playwright_System",
  APPLICATION_NAME: "AllStar.apk",

  APPLICATION_PACKAGE_NAME: "com.welldoc.allstar.nonprod",
  APPLICATION_PACKAGE_NAME_IOS: "com.welldoc.allstar.debug",

  /* File Structure */
  HOME_DIR: process.cwd() + "/",
  TEST_DATA_DIR: process.cwd() + "/testData/",
  FILE_UPLOAD_DIR: process.cwd() + "/testData/FileUpload/",
  REPORT_DIR: process.cwd() + "/reports/",
  RESULT_SCREENSHOTS_DIR: process.cwd() + "/reports/resultScreenshots/",
  EXECUTABLES_DIR: process.cwd() + "/executables/",
  MOBILE_APP_DIR: process.cwd() + "/mobileApps/",

  APP_SCREENSHOT_DIR: process.cwd() + "/screenshots/",
  BASESCREENSHOT_EN_DIR: process.cwd() + "/screenshots/baseScreenshots/EN/",
  ACTUALSCREENSHOT_EN_DIR: process.cwd() + "/screenshots/actualScreenshots/EN/",
  BASESCREENSHOT_ES_DIR: process.cwd() + "/screenshots/baseScreenshots/ES/",
  ACTUALSCREENSHOT_ES_DIR: process.cwd() + "/screenshots/actualScreenshots/ES/",

  ERRORSCREENSHOT_DIR: process.cwd() + "/reports/errorScreenshots/",
  ERRORSCREENSHOT_WEB_DIR: process.cwd() + "/reports/WebErrorScreenshots/",
  BASESCREENSHOT_WEB_DIR: process.cwd() + "/screenshots/WebBaseScreenshots/",
  ACTUALSCREENSHOT_WEB_DIR: process.cwd() + "/screenshots/WebActualScreenshots/",
  ERRORSCREENSHOT_COUNT: 0,

  /* Database */
  DATABASE_URL: "wd-az-qa-db1.database.windows.net",
  DB_USERNAME: "WD_QA_TEAM",
  DB_PASSWORD: "Welldoc@123",
  DB_NAME: "DSMBASE_AZQA32",

  /* Generic Patient Details */
  EmailAddress: "automationgk20+<randomvalue>@gmail.com",
  USERNAME: "welldocsu",
  PASSWORD: "welldoc123",
  Pin: "1111",
  FirstName: "Te",
  LastName: "Au",
  Gender: "Male",
  DOB: "Sep-20-2005",
  PhoneNumber: "4436923124",
  HeightFeet: "5",
  HeightInches: "4",
  Weight: "200",

  /* UI General Settings */
  SIMILARITY_THRESHOLD: 5.0,

  /* Timeouts */
  IMPLICIT_TIMEOUT: 60 * 1000,
  EXPLICIT_TIMEOUT: 120 * 1000,

  /* Date Formats */
  STD_DATE_FORMAT: "yyyy-MM-dd",
  STD_TIME_FORMAT: "h:m:s a",
  HOUR_TIME_FORMAT: "h:m:s a",
  REPORT_DATE_TIME_FORMAT: "yyyy-MM-dd_HHmmss",

  /* Error Messages */
  ERRORMSG_SKIPTEST:
    "Test execution is skipped based on value provided in 'ExecutionStatus' in test data.",
  ERRORMSG_SKIPTEST_STATUS:
    "Test execution is skipped. 'ExecutionStatus' column does not exist in the input test data.",

  /* Extent Report Config */
  REPORT_CONFIG: `<?xml version="1.0" encoding="UTF-8"?>
  <extentreports>
    <configuration>
      <documentTitle>Automation Report</documentTitle>
      <reportName>Welldoc Test Automation Report</reportName>
      <dateFormat>yyyy-MM-dd</dateFormat>
      <timeFormat>h:m:s a</timeFormat>
    </configuration>
  </extentreports>`,

  pFilePath: "./testData/commondata.properties",
  excelPath: "./testData/CVSTestData.xlsx"
};

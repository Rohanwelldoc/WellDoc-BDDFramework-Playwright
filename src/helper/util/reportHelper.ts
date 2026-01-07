import * as reporter from 'cucumber-html-reporter';
import path from 'path';
import fs from 'fs-extra';

export const generateLiteReport = (jsonReportPath: string): string => {
    const reportDir = path.join(process.cwd(), 'test-results');

    if (!fs.existsSync(jsonReportPath)) {
        throw new Error(`JSON report not found: ${jsonReportPath}`);
    }

    // 🔑 Validate JSON BEFORE using it
    try {
        JSON.parse(fs.readFileSync(jsonReportPath, 'utf-8'));
    } catch (err) {
        throw new Error(`Invalid / incomplete JSON: ${jsonReportPath}`);
    }

    const reportName = path.basename(jsonReportPath)
        .replace('cucumber_report_', '')
        .replace('.json', '');

    const htmlOutput = path.join(reportDir, `lite-report-${reportName}.html`);

    console.log(">>> Generating Lite Report...");
    console.log(">>> JSON Source:", jsonReportPath);
    console.log(">>> HTML Output:", htmlOutput);

    reporter.generate({
        theme: 'bootstrap',
        jsonFile: jsonReportPath,
        output: htmlOutput,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        metadata: {
            "Environment": process.env.TEST_ENV || "QA",
            "Browser": process.env.BROWSER || "Chromium"
        }
    });

    if (!fs.existsSync(htmlOutput)) {
        throw new Error(`Lite report generation failed: ${htmlOutput}`);
    }

    return htmlOutput;
};

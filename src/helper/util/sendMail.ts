import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import * as dotenv from 'dotenv';
import { generateLiteReport } from './reportHelper';

dotenv.config();

export async function sendMail(jsonArg?: string) {
    console.log(">>> Checking environment variables...");

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
        console.error(">>> ERROR: Missing EMAIL_USER / EMAIL_PASS / EMAIL_TO");
        return;
    }

    // 1️⃣ Resolve JSON path
    const jsonReportPath = jsonArg
        ? path.resolve(jsonArg)
        : path.join(process.cwd(), 'test-results', 'cucumber_report_login.json');

    console.log(">>> Using JSON:", jsonReportPath);

    if (!fs.existsSync(jsonReportPath)) {
        console.error(">>> ERROR: JSON report not found");
        return;
    }

    let htmlReportPath: string;

    // 2️⃣ Generate Lite HTML report
    try {
        htmlReportPath = generateLiteReport(jsonReportPath);
        console.log(">>> Lite Report generated:", htmlReportPath);
    } catch (err: any) {
        console.error(">>> Report generation failed:", err.message);
        return;
    }

    if (!fs.existsSync(htmlReportPath)) {
        console.error(">>> ERROR: HTML report not found:", htmlReportPath);
        return;
    }

    // 3️⃣ Send email
    console.log(">>> Connecting to Gmail SMTP...");

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Automation Lite Report - ${process.env.TEST_ENV || 'QA'}`,
        text: 'Automation execution completed. Lite HTML report attached.',
        attachments: [
            {
                filename: path.basename(htmlReportPath),
                path: htmlReportPath
            }
        ]
    });

    console.log(">>> ✅ SUCCESS: Email sent successfully!");
}

/**
 * ✅ Execute when run via CLI
 */
if (require.main === module) {
    const jsonArg = process.argv[2];
    sendMail(jsonArg).catch(err => {
        console.error(">>> ❌ FATAL ERROR sending email:", err);
        process.exit(1);
    });
}

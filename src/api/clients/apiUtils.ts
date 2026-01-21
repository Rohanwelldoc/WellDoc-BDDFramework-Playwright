import { request } from "@playwright/test";

// Make sure 'export' is here!
export class APIUtils {
    async triggerQuartzJob(jobName: string) {
        const context = await request.newContext();
        // ... your code ...
    }

    async getPatientID(username: string): Promise<number> {
        const context = await request.newContext();
        // ... your code ...
        return 123; // example
    }
}
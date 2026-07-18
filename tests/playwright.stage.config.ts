import { defineConfig } from '@playwright/test';

const baseURL = process.env.TARGET_SITEURL;

if (!baseURL) {
    throw new Error('TARGET_SITEURL is not defined');
}

export default defineConfig({
    testDir: '../widgets',
    testMatch: '**/tests/**/*.spec.ts',
    maxFailures: 1,
    use: {
        baseURL,
        ignoreHTTPSErrors: true,
        headless: true,
        trace: 'on',
        video: 'on',
        screenshot: 'only-on-failure',
    }
});
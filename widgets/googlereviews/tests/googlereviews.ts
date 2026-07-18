import { test, expect } from '@playwright/test';

test.describe('USP Widget', () => {
    let googlereviews;

    test.beforeEach(async ({ page }) => {
        await page.goto('/?reactedge_debug=eager');
        googlereviews = page.locator('googlereviews-widget');
        await expect(googlereviews).toBeVisible();
    });
});
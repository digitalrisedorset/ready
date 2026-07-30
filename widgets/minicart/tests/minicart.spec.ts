import { test } from '@playwright/test';

test.describe('Minicart Widget', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/?reactedge_debug=eager');
    });
});
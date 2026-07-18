import { test, expect } from '@playwright/test';

test.describe('Minicart Widget', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/?reactedge_debug=eager');
    });

    test('Minicart widget exists', async () => {

    });
});
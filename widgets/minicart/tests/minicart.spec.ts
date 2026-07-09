import { test, expect } from '@playwright/test';

test.describe('Minicart Widget', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Minicart widget exists', async () => {

    });
});
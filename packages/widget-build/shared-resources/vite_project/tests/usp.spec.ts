import { test, expect } from '@playwright/test';

test.describe('USP Widget', () => {
    let usp;

    test.beforeEach(async ({ page }) => {
        await page.goto('/?reactedge_debug=eager');
        usp = page.locator('usp-widget');
        await expect(usp).toBeVisible();
    });

    test('USP widget finds its slides', async ({ page }) => {
        const slides = usp.locator('[data-usp-slide]');

        await expect(slides).toHaveCount(3);
        await expect(slides.first()).toHaveText(/\S+/);
    });
});
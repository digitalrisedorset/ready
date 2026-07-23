import { test, expect } from '@playwright/test';

test.describe('SellerFinder Widget', () => {
    let widget;

    test.beforeEach(async ({ page }) => {
        await page.goto('/?reactedge_debug=eager');
        widget = page.locator('sellerfinder-widget');
    });

    test('mounts successfully', async () => {
        await expect(widget).toBeVisible();
    });

    test('mounts successfully with valid config', async ({ page }) => {
        const sellers = await widget.locator('[data-seller-card]').count();
        await expect(sellers).toBeGreaterThan(0);
    });
});

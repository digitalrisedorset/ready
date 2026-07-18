import { test, expect } from '@playwright/test';
import {WIDGET_ID} from "../src/Config";

test.describe('RegionMap Widget', () => {
    let widget;

    test.beforeEach(async ({page}) => {
        await page.goto('/?reactedge_debug=eager');
        widget = page.locator(`${WIDGET_ID}-widget`);
        await expect(widget).toBeVisible();
    });

    test('mounts successfully', async () => {
        await expect(widget).toBeVisible();
    });

    test('renders map container', async () => {
        const container = widget.locator('[data-widget="regionmap"]')
        await expect(container).toBeVisible();
    });

    test('renders the region map title', async ({ page }) => {
        const title = page.locator('[data-regionmap-title]');
        await expect(title).toBeVisible();
    });
});

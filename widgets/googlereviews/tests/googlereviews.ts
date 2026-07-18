import { test, expect } from '@playwright/test';
import {WIDGET_ID} from "../src/Config";

test.describe('USP Widget', () => {
    let widget;

    test.beforeEach(async ({page}) => {
        await page.goto('/?reactedge_debug=eager');
        widget = page.locator(`${WIDGET_ID}-widget`);
        await expect(widget).toBeVisible();
    });
});
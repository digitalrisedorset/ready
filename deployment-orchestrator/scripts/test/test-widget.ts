import { execSync } from 'child_process';
import path from 'path';
import {getConfig} from "../config.ts";
import {Report} from "../build/report.ts";
import {getReactEdgeRoot} from "../../../packages/widget-build/shared-resources/filesystem/reactedgeRoot.ts";

export function testWidget(
    widgetName: string,
    report: Report
): void {

    report.info(
        'Testing widget',
        {
            widget: widgetName
        }
    );

    const config = getConfig()

    try {
        const playwright = path.join(
            getReactEdgeRoot(),
            'node_modules',
            '.bin',
            'playwright'
        );

        execSync(
            `${playwright} test --config=tests/playwright.stage.config.ts widgets/${widgetName}/tests`,
            {
                cwd: getReactEdgeRoot(),
                stdio: 'inherit'
            }
        );

        report.success(
            'Widget test completed',
            {
                widget: widgetName
            }
        );

    } catch (error) {

        report.error(
            'Widget test failed',
            {
                widget: widgetName
            }
        );
    }
}
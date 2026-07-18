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
                stdio: 'inherit',
                env: {
                    ...process.env,
                    ...(process.env.PWDEBUG === '1' && {
                        PWDEBUG: '1'
                    })
                }
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
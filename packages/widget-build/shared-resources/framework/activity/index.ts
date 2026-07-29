import {getDebugTargets} from "@reactedge/framework/activity/activity.guard";

type Level = 'info' | 'warn' | 'error';

export interface ActivityPayload {
    widget: string;
    instance: string;
    phase: string;
    message: string;
    level: Level;
    data?: unknown;
    ts: number;
}

export interface Activity {
    log(
        phase: string,
        message: string,
        data?: unknown,
        level?: Level
    ): void;
}

export class WidgetActivity
    implements Activity {

    private readonly widgetId: string;
    private readonly instance?: string;

    constructor(
        widgetId: string,
        instance?: string
    ) {
        this.widgetId = widgetId;
        if (instance !== undefined) {
            this.instance = instance;
        }
    }

    public log(
        phase: string,
        message: string,
        data?: unknown,
        level: Level = 'info'
    ): void {

        const payload: ActivityPayload = {
            widget: this.widgetId,
            instance: this.instance ?? this.widgetId,
            phase,
            message,
            level,
            data,
            ts: Date.now(),
        };

        if (this.isActivityEnabled()) {
            const prefix =
                `[${this.widgetId}] ${phase}`;

            if (level === 'error') {
                console.error(prefix, payload);
            } else if (level === 'warn') {
                console.warn(prefix, payload);
            } else {
                console.log(prefix, payload);
            }

            this.dispatchActivityEvent(payload);
        }
    }

    private dispatchActivityEvent(
        payload: ActivityPayload
    ): void {

        if (typeof window === 'undefined') {
            return;
        }

        window.dispatchEvent(
            new CustomEvent(
                'reactedge:activity',
                {
                    detail: payload,
                }
            )
        );
    }

    private isActivityEnabled(): boolean {
        const debugTargets = getDebugTargets();

        return (
            debugTargets !== null &&
            (
                debugTargets.includes("all") ||
                debugTargets.includes(this.widgetId.toLowerCase())
            )
        );
    }
}

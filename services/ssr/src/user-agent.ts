export function resolveDevice(
    userAgent?: string
): 'mobile' | 'tablet' | 'desktop' {
    if (userAgent === undefined) {
        return 'desktop'
    }

    const ua = userAgent.toLowerCase();

    if (
        ua.includes('ipad') ||
        ua.includes('tablet')
    ) {
        return 'tablet';
    }

    if (
        ua.includes('mobile') ||
        ua.includes('android')
    ) {
        return 'mobile';
    }

    return 'desktop';
}
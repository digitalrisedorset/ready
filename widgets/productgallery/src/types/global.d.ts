export {};

declare global {
    interface Window {
        __REACTEDGE_DEBUG__?: boolean;
    }
    const __REACTEDGE_MODE__: "render" | "hydrate";
}

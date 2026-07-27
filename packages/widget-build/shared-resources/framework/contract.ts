import {ReactEdgeRuntimeConfig} from "@reactedge/public-api/runtime";

export class ResourceLoader {
    async load<T>(path: string): Promise<T> {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Failed to load resource: ${path}`);
        }

        return response.json() as Promise<T>;
    }

    loadContract<T>(path: string): Promise<T> {
        return this.load<T>(`/${path}`);
    }

    loadRuntime(): Promise<ReactEdgeRuntimeConfig> {
        return this.load<ReactEdgeRuntimeConfig>("/reactedge-runtime.json");
    }
}
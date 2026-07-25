export async function loadContract<T>(path: string): Promise<T> {
    const response = await fetch(`/${path}`);

    if (!response.ok) {
        throw new Error(`Failed to load contract: ${path}`);
    }

    return response.json() as Promise<T>;
}
import { createGraphqlClient } from "./graphqlClient";
import type {WidgetActivity} from "@reactedge/framework/activity";
import {GraphqlCache} from "@reactedge/framework/graphql/graphqlCache";

type GraphqlOptions = {
    cache?: boolean;
    ttl?: number;
};

export function createGraphqlService(apiEndpoint: string, storeCode: string, activity?: WidgetActivity) {
    const request = createGraphqlClient(apiEndpoint, storeCode, activity);
    const inFlight = new Map<string, Promise<unknown>>();

    return async function query<T>(
        query: string,
        variables?: Record<string, unknown>,
        options: GraphqlOptions = { cache: true, ttl: 60000 }
    ): Promise<T> {
        if (!options.cache) {
            return request<T>(query, variables);
        }

        const cache = new GraphqlCache(options.ttl);

        const key = cache.getKey(query, variables, storeCode);

        // 1. Try cache
        const cached = cache.get<T>(key);
        if (cached) {
            return cached;
        }

        // 2. Deduplicate in-flight requests
        if (inFlight.has(key)) {
            return inFlight.get(key) as T;
        }

        const promise = request<T>(query, variables)
            .then((data) => {
                cache.set(key, data);
                inFlight.delete(key);
                return data;
            })
            .catch((err) => {
                inFlight.delete(key);

                // fallback to stale cache if available
                const stale = cache.get<T>(key, Infinity);
                if (stale) return stale;

                throw err;
            });

        inFlight.set(key, promise);

        return promise;
    };
}
import {useEffect, useState} from "react";
import type {MinicartData, WidgetConfig} from "../components/Types.ts";
import {loadMagentoCart} from "../services/magentoCartService.ts";

export function useMagentoCart(config: WidgetConfig) {
    const [cart, setCart] = useState<MinicartData | null>(null);

    useEffect(() => {
        const reload = async () => {
            const contract = await loadCartFromConfig(config);
            setCart(contract);
        };

        window.addEventListener("cart:changed", reload);
        return () => window.removeEventListener("cart:changed", reload);

    }, []);

    useEffect(() => {
        const loadInitial = async () => {
            const contract = await loadCartFromConfig(config);
            setCart(contract);
        };

        loadInitial();
    }, []);

    return { cart };
}

async function loadCartFromConfig(config: WidgetConfig) {
    const contract = config.data
    if (contract) {
        return contract;
    }

    const updated = await loadMagentoCart();
    return updated;
}
import type {MinicartData, WidgetConfig} from "./Types.ts";
import {badgeStyle, buttonWrapper, openCartButtonStyle} from "./MinicartUI/minicartDrawerStyles";
import {__} from "../lib/i18n";
import {Loading} from "./Loading.tsx";

interface MinicartTriggerProps {
    cart: MinicartData | null;
    setIsOpen: (value: boolean) => void;
    config: WidgetConfig
}

export function MinicartTrigger({ cart, setIsOpen, config }: MinicartTriggerProps) {
    const openCart = () => setIsOpen(true);
    const itemCount = cart?.summary_count ?? 0;

    if (!config) return <Loading config={config} />

    return (
        <div style={buttonWrapper}>
            <button style={{
                ...openCartButtonStyle,
                backgroundColor: config.primaryColor
            }} onClick={openCart}>
                {__('Cart')}
            </button>
            {itemCount > 0 && (
                <span style={{
                    ...badgeStyle,
                    backgroundColor: config.secondaryColour
                }}>{itemCount}</span>
            )}
        </div>
    );
}

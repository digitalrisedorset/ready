import {useState} from "react";
import {MinicartTrigger} from "./MinicartTrigger.tsx";
import {backdropStyle, drawerBaseStyle, drawerClosedStyle, drawerOpenStyle} from "./MinicartUI/minicartStyles.ts";
import {MinicartHeader} from "./MinicartHeader.tsx";
import {contentStyle, footerStyle} from "./MinicartUI/minicartDrawerStyles.ts";
import {MinicartEmpty} from "./MinicartEmpty.tsx";
import {MinicartItemList} from "./MinicartItemList.tsx";
import {MinicartFooter} from "./MinicartFooter.tsx";
import {useMagentoCart} from "../hooks/useMagentoCart.ts";
import type {WidgetConfig} from "./Types.ts";

type Props = {
    config: WidgetConfig
};

export const MinicartWidget = ({ config }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {cart} = useMagentoCart(config);

    const closeCart = () => setIsOpen(false);

    if (cart === null) return

    return (
        <>
            {/* Trigger button (for now) */}
            {!isOpen && <MinicartTrigger cart={cart} setIsOpen={setIsOpen} config={config}/>}

            {/* Backdrop */}
            {isOpen && <div style={backdropStyle} onClick={closeCart}/>}

            {/* Drawer */}
            <div
                style={{
                    ...drawerBaseStyle,
                    ...(isOpen ? drawerOpenStyle : drawerClosedStyle),
                }}
            >
                {/* Header */}
                <MinicartHeader cart={cart} closeCart={closeCart}/>

                <div style={contentStyle}>
                    {cart.items === undefined || cart.items?.length === 0 ? <MinicartEmpty/> : <MinicartItemList cart={cart} config={config}/>}
                </div>

                {cart.items?.length > 0 && (
                    <div style={footerStyle}>
                        <MinicartFooter cart={cart} config={config}/>
                    </div>
                )}
            </div>
        </>
    );
};


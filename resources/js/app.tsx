import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS
import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

interface Product {
    id: number;
    name: string;
    image: string;
    new_price: number;
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const WrappedApp: React.FC<any> = (props) => {
            const [cartItems, setCartItems] = useState<Product[]>([]);

            const addToCart = (product: Product) => {
                setCartItems((prevCart) => {
                    const isAlreadyInCart = prevCart.some(
                        (item) => item.id === product.id
                    );
                    return isAlreadyInCart ? prevCart : [...prevCart, product];
                });
            };

            const removeFromCart = (productId: number) => {
                setCartItems((prevCart) =>
                    prevCart.filter((item) => item.id !== productId)
                );
            };

            return (
                <App
                    {...props}
                    cartItems={cartItems}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            );
        };

        root.render(<WrappedApp {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});

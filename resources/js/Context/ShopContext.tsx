import React, { ReactNode, createContext, useState } from "react";
import all_product from "../Components/Frontend_Assets/all_product";

// Define types for the context
interface CartItems {
    [key: number]: number;
}

interface ShopContextType {
    all_product: typeof all_product;
    cartItems: CartItems;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
}

export const ShopContext = createContext<ShopContextType | null>(null);

const getDefaultCart = (): CartItems => {
    let cart: CartItems = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

interface ShopContextProviderProps {
    children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
    children,
}) => {
    const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart());

    const addToCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue: ShopContextType = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

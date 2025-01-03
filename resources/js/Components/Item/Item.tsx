import { router } from "@inertiajs/react";
import React from "react";
import "./Item.css";

interface ItemProps {
    id: number;
    image: string; // URL or path to the image
    name: string; // Name of the item
    new_price: number; // New price of the item
    old_price: number; // Old price of the item
    onAddToCart: (id: number) => void; // Function to handle "Add to Cart" action
}

export const Item: React.FC<ItemProps> = ({
    id,
    name,
    image,
    new_price,
    old_price,
    onAddToCart,
}) => {
    return (
        <div className="item">
            <img src={image} alt={name} className="item-image" />
            <h3 className="item-name">{name}</h3>
            <p className="item-price">
                <span className="new-price">${new_price.toFixed(2)}</span>
                {/*{old_price && (
                    <span className="old-price">${old_price.toFixed(2)}</span>
                )}*/}
            </p>
            <button
                className="add-to-cart-button"
                onClick={() => {
                    onAddToCart(id); // Call the add-to-cart logic
                    router.visit(route("cart")); // Navigate to the cart page
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

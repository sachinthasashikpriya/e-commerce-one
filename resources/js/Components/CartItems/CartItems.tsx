import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/Assets/Frontend_Assets/cart_cross_icon.png";
import "./CartItems.css";

interface Product {
    id: number;
    name: string;
    image: string;
    new_price: number;
}

interface ShopContextType {
    all_product: Product[];
    cartItems: { [key: number]: number };
    removeFromCart: (id: number) => void;
}

const CartItems: React.FC = () => {
    const { all_product, cartItems, removeFromCart } = useContext(
        ShopContext
    ) as ShopContextType;

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((product) => {
                const quantity = cartItems[product.id] || 0;
                if (quantity > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="carticon-product-icon"
                                />
                                <p>{product.name}</p>
                                <p>${product.new_price.toFixed(2)}</p>
                                <button className="cartitems-quantity">
                                    {quantity}
                                </button>
                                <p>
                                    ${(product.new_price * quantity).toFixed(2)}
                                </p>
                                <img
                                    className="cartitems-remove-icon"
                                    src={remove_icon}
                                    alt="Remove item"
                                    onClick={() => removeFromCart(product.id)}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                </div>
            </div>
        </div>
    );
};

export default CartItems;

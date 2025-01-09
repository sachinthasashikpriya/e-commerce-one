import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import star_dull_icon from "../assets/Assets/Frontend_Assets/star_dull_icon.png";
import star_icon from "../assets/Assets/Frontend_Assets/star_icon.png";
import "./ProductDisplay.css";

interface Product {
    id: number;
    name: string;
    image: string;
    old_price: number;
    new_price: number;
}

interface ProductDisplayProps {
    product: Product;
}

export const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
    const { addToCart } = useContext(ShopContext);
    const navigate = useNavigate(); // Hook for navigation

    const handleAddToCart = () => {
        addToCart(product.id); // Add product to cart
        navigate("/Cart"); // Navigate to the cart page
    };

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="Product thumbnail" />
                    <img src={product.image} alt="Product thumbnail" />
                    <img src={product.image} alt="Product thumbnail" />
                    <img src={product.image} alt="Product thumbnail" />
                </div>
                <div className="productdisplay-img">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="productdisplay-main-img"
                    />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_dull_icon} alt="Dull Star" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price.toFixed(2)}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price.toFixed(2)}
                    </div>
                    <div className="productdisplay-right-description">
                        A lightweight, usually knitted, pullover shirt,
                        close-fitting and with a round neckline and short
                        sleeves, worn as an undershirt or outer garment.
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="add-to-cart-button"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

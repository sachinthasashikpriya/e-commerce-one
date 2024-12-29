import React, { useContext } from "react";

import { ShopContext } from "../../Context/ShopContext";
import { Item } from "../Item/Item";
import dropdown_icon from "../components/assets/Assets/Frontend_Assets/dropdown_icon.png";
import "./css/ShopCategory.css";

// Define types for product and props
interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    new_price: number;
    old_price: number;
}

interface ShopCategoryProps {
    banner: string;
    category: string;
}

export const ShopCategory: React.FC<ShopCategoryProps> = (props) => {
    const { all_product } = useContext(ShopContext)!;
    const handleAddToCart = (id: number) => {
        console.log(`Product with ID ${id} added to cart.`);
        // Add logic to handle adding the product to the cart
    };
    return (
        <div className="Shop-category">
            <img src={props.banner} alt="Shop Banner" />
            <div className="ShopCategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="ShopCategory-sort">
                    Sort by <img src={dropdown_icon} alt="Dropdown icon" />
                </div>
            </div>
            <div className="ShopCategory-products">
                {all_product &&
                    all_product.map((item: Product, i: number) => {
                        if (props.category === item.category) {
                            return (
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                    onAddToCart={handleAddToCart} // Pass the function as a prop
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
            </div>
        </div>
    );
};

export default ShopCategory;

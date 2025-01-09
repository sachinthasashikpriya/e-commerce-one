import React from "react";
import arrow_icon from "../assets/Assets/Frontend_Assets/arrow.png";
import "./Breadcrum.css";

interface BreadcrumProps {
    product?: {
        category: string;
        name: string;
    };
}

export const Breadcrum: React.FC<BreadcrumProps> = ({ product }) => {
    if (!product) {
        return <div className="breadcrum">Product not found</div>;
    }

    return (
        <div className="breadcrum">
            Home <img src={arrow_icon} alt="arrow icon" /> SHOP
            <img src={arrow_icon} alt="arrow icon" /> {product.category}
            <img src={arrow_icon} alt="arrow icon" />
            {product.name}
        </div>
    );
};

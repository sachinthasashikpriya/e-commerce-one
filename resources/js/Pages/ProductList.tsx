import React from "react";

interface Product {
    id: number;
    name: string;
    image: string;
    new_price: number;
}

interface ProductListProps {
    products: Product[]; // Array of Product objects
    addToCart: (product: Product) => void; // Function to add a product to the cart
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                        }}
                    />
                    <h3>{product.name}</h3>
                    <p>Price: ${product.new_price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

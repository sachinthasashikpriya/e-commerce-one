import data_product from "../Frontend_Assets/data";
import { Item } from "../Item/Item";
import "./Popular.css";

export const Popular = () => {
    const handleAddToCart = (id: number) => {
        console.log(`Product with ID ${id} added to cart.`);
        // Add logic to handle adding the product to the cart
    };
    return (
        <div className="popular">
            <h1>
                POPULAR IN WOMEN
                <hr />
            </h1>

            <div className="popular-item">
                {data_product.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                            onAddToCart={handleAddToCart} // Pass the function as a prop
                        />
                    );
                })}
            </div>
        </div>
    );
};

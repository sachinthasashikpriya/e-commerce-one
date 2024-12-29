import Kids_collections from "../Components/Frontend_Assets/Kids_collections";
import KidsBanner from "../Components/Frontend_Assets/banner_kids.png";
import { Item } from "../Components/Item/Item";
import { Navbar } from "../Components/Navbar/Navbar";
import "../Components/ShopCategory/ShopCategory.css";
export default function Kids() {
    const handleAddToCart = (id: number) => {
        console.log(`Product with ID ${id} added to cart.`);
        // Add logic to handle adding the product to the cart
    };
    return (
        <>
            <Navbar />
            <div className="banner-container">
                <img
                    src={KidsBanner}
                    alt="Men's Banner"
                    className="men-banner-image"
                />
            </div>
            <div className="popular-item">
                {Kids_collections.map((item, i) => {
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
        </>
    );
}

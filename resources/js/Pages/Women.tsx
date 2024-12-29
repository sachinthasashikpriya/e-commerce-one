import women_collections from "../Components/Frontend_Assets/WomenCollections";
import WomenBanner from "../Components/Frontend_Assets/banner_women.png";
import { Item } from "../Components/Item/Item";
import { Navbar } from "../Components/Navbar/Navbar";
import "../Components/ShopCategory/ShopCategory.css";
export default function Women() {
    return (
        <>
            <Navbar />
            <div className="banner-container">
                <img
                    src={WomenBanner}
                    alt="Men's Banner"
                    className="men-banner-image"
                />
            </div>
            <div className="popular">
                <div className="popular-item">
                    {women_collections.map((item, i) => {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

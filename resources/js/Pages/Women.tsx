import WomenBanner from "../Components/Frontend_Assets/banner_women.png";
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
        </>
    );
}

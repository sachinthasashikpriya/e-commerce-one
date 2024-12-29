import menBanner from "../Components/Frontend_Assets/banner_mens.png";
import { Navbar } from "../Components/Navbar/Navbar";
import "../Components/ShopCategory/ShopCategory.css";
export default function Men() {
    return (
        <>
            <Navbar />
            <div className="banner-container">
                <img
                    src={menBanner}
                    alt="Men's Banner"
                    className="men-banner-image"
                />
            </div>
        </>
    );
}

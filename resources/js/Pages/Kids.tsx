import KidsBanner from "../Components/Frontend_Assets/banner_kids.png";
import { Navbar } from "../Components/Navbar/Navbar";
import "../Components/ShopCategory/ShopCategory.css";
export default function Kids() {
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
        </>
    );
}

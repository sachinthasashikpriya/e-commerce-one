import instagram_icon from "../Frontend_Assets/instagram_icon.png";
import footer_logo from "../Frontend_Assets/logo_big.png";
import pintester_icon from "../Frontend_Assets/pintester_icon.png";
import whatsapp_icon from "../Frontend_Assets/whatsapp_icon.png";
import "./Footer.css";
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights Reserved.</p>
            </div>
        </div>
    );
};

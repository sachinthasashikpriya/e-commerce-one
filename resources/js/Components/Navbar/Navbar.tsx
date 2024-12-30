import { Link, usePage } from "@inertiajs/react";

import React from "react";

import cart_icon from "../Frontend_Assets/cart_icon.png";
import logo from "../Frontend_Assets/logo.png";
import "./Navbar.css";

interface NavbarProps {
    showAuthButtons?: boolean; // Prop to toggle Sign In and Sign Up buttons
}

export const Navbar: React.FC<NavbarProps> = ({ showAuthButtons = true }) => {
    const { url } = usePage(); // Get the current URL
    const currentPage = url.split("/")[1] || "Shop"; // Determine the current route
    //const [menu, setMenu] = useState<string>("Shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li>
                    <Link
                        href="/"
                        className="nav-link"
                        style={{ textDecoration: "none" }}
                    >
                        Shop
                    </Link>
                    {currentPage === "Shop" && <hr />}
                </li>
                <li>
                    <Link
                        href={route("men")}
                        className="nav-link"
                        style={{ textDecoration: "none" }}
                    >
                        Men
                    </Link>
                    {currentPage === "men" && <hr />}
                </li>
                <li>
                    <Link
                        href={route("women")}
                        className="nav-link"
                        style={{ textDecoration: "none" }}
                    >
                        Women
                    </Link>
                    {currentPage === "women" && <hr />}
                </li>
                <li>
                    <Link
                        href={route("kids")}
                        className="nav-link"
                        style={{ textDecoration: "none" }}
                    >
                        Kids
                    </Link>
                    {currentPage === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                {showAuthButtons && (
                    <>
                        <Link href={route("login")}>
                            <button>Sign In</button>
                        </Link>
                        <Link href={route("register")}>
                            <button>Sign Up</button>
                        </Link>
                    </>
                )}
                <Link href={route("cart")}>
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};
//<Link href={route("login")}>Log in</Link>

import { Footer } from "@/Components/Footer/Footer"; // Create a Footer component if not already created
import { Navbar } from "@/Components/Navbar/Navbar";
import React from "react";

interface NavbarLayoutProps {
    children: React.ReactNode;
}

export const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
    console.log("NavbarLayout rendered");
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
export default NavbarLayout;

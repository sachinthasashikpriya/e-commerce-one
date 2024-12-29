import { Hero } from "@/Components/Hero/Hero";
import { NewCollections } from "@/Components/NewCollections/NewCollections";
import { NewsLetter } from "@/Components/NewsLetter/NewsLetter";
import { Offers } from "@/Components/Offers/Offers";
import { Popular } from "@/Components/popular/Popular";
import NavbarLayout from "@/Layouts/NavbarLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />

            {auth.user ? (
                <Link href={route("dashboard")}>Dashboard</Link>
            ) : (
                <>
                    <Link href={route("login")}>Log in</Link>
                    <Link href={route("register")}>Register</Link>
                </>
            )}
            <NavbarLayout>
                <Hero />
                <Popular />
                <Offers />
                <NewCollections />
                <NewsLetter />
            </NavbarLayout>
        </>
    );
}

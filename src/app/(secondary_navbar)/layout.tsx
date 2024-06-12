import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import MobileNavbar from "../components/mobile-navbar/mobile-navbar";
import { getNavigationItems } from "../lib/cms/queries";

export default async function NavbarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const navigationItems = await getNavigationItems();
    return (
        <>
            <Navbar hideSearchBar secondary />
            <div className="absolute left-4 top-4 z-20">
                <MobileNavbar navigationItems={navigationItems} />
            </div>
            {children}
            <Footer />
        </>
    );
}

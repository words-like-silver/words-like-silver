import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function NavbarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar hideSearchBar secondary />
            {children}
            <Footer />
        </>
    );
}

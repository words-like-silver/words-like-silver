import Navbar from "../components/navbar";

export default function NavbarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar secondary />
            {children}
        </>
    );
}

import { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Volkhov } from "next/font/google";
import Footer from "./components/Footer";
import CartContextProvider from "./store/CartContext/CartContextProvider";


const volkhov = Volkhov({
    subsets: ["latin"],
    weight: ["400", "700"], // Add the weights you need
    style: ["normal", "italic"], // Add styles if needed
    display: "swap",
});

export const metadata: Metadata = {
    title: "Fasco",
    description: "Fasco is a fashion store You can find all your fashion needs here",
    openGraph: {
        title: "Fasco",
        description: "Fasco is a fashion store You can find all your fashion needs here",
    }
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en"  >
            <body className={`${volkhov.className}`}>
                <CartContextProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </CartContextProvider>
            </body>
        </html>
    );
}
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import FloatCta from "@/components/FloatCta";

export const metadata = {
  metadataBase: new URL("https://penandpixel.studio"),
  title: "Pen & Pixel — Creative Digital Agency",
  description:
    "Pen & Pixel is a creative-led digital marketing and branding agency based in Karachi. Strategy, content, and execution that moves the needle — for brands in Pakistan and beyond.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Pen & Pixel — Creative Digital Agency",
    description:
      "Strategy, content, and execution that actually moves the needle. Based in Karachi, built for brands that mean business.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#121119",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Zilla+Slab:wght@300;400;500;600;700&family=Arimo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatCta />
      </body>
    </html>
  );
}

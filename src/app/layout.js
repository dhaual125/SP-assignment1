import Navbar from "@/component/Navbar";
import Hamburger from "@/component/Hamburger";
import ThemeToggle from "@/component/ThemeToggle";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Hamburger />
        <ThemeToggle />
        <Navbar />
        {children}
      </body>
    </html>
  );
}


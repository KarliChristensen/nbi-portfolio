import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Context from "./components/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio V3",
  description: "V3 of the portfolio series, reworked",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Context>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Context>
    </html>
  );
}

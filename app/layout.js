import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContextProvider from "./components/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio V3",
  description: "V3 of the portfolio series, reworked",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}

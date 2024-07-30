import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walisson | Portfolio",
  description: "Personal website",
};

export default function RootLayout(
  {children}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="pt-br">
      <body>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}

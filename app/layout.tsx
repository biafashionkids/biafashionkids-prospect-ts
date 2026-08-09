import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bia Fashion Kids | Moda Infantil com Carinho",
  description:
    "Roupas infantis para meninas e meninos com estilo, conforto e preço justo. Vestidos, conjuntos, camisas polo e muito mais na Bia Fashion Kids.",
  keywords: [
    "moda infantil",
    "roupa de criança",
    "Bia Fashion Kids",
    "roupa infantil menina",
    "roupa infantil menino",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${baloo.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

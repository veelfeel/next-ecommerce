import Footer from "@/components/footer";
import Header from "@/components/Header";

import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condik - супермаркет кондиционеров",
  description:
    "Официальный сайт интернет-магазина сплит-систем Condik. Большой ассортимент бытовых и промышленных кондиционеров, бесплатная доставка по Сочи.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

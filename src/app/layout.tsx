import Footer from "@/components/footer";
import Header from "@/components/Header";

import "./globals.scss";
import BottomBarsContainer from "@/components/BottomMobilebar/BottomBarsContainer";

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
        <BottomBarsContainer />
      </body>
    </html>
  );
}

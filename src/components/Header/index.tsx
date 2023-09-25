import Link from "next/link";
import CatalogLink from "./CatalogLink";
import Search from "../Search";
import HeaderRightSection from "./HeaderRightSection";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__top-content">
            <ul className="header__nav">
              <li>
                <Link href="#">Акции</Link>
              </li>
              <li>
                <Link href="#">Доставка</Link>
              </li>
            </ul>
            <Link href="tel:+79881482838">8 (988) 148-28-38</Link>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__bottom-content">
            <div className="header__bottom-content-left">
              <Link href="/" className="logo">
                Condik
              </Link>
              <CatalogLink />
            </div>
            <Search placeholder="Поиск по товарам..." />
            <HeaderRightSection />
          </div>
        </div>
      </div>
    </header>
  );
}

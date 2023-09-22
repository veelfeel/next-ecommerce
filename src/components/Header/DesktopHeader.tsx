import Link from "next/link";
import HeaderRightSection from "./HeaderRightSection";
import CatalogLink from "./CatalogLink";
import { Search } from "../Search";

export default function DesktopHeader() {
  return (
    <div className="header-desktop">
      <div className="header__top">
        <div className="container">
          <div className="header__top-content">
            <ul className="header__nav">
              <li>
                <Link href="#">Акции</Link>
              </li>
              <li>
                <Link href="#">Как купить</Link>
              </li>
              <li>
                <Link href="#">Доставка</Link>
              </li>
            </ul>
            <Link href="tel:+79881482838">8 (988) 148-28-38</Link>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-content">
            <div className="header__bottom-content-left">
              <Link href="/" className="logo">
                Condi-K
              </Link>
              <CatalogLink />
            </div>
            <Search placeholder="Поиск по товарам..." />
            <HeaderRightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

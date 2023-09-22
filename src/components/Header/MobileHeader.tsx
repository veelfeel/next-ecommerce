import Link from "next/link";
import { Search } from "../Search";

export default function MobileHeader() {
  return (
    <div className="header-mobile">
      <div className="container">
        <div className="header-mobile__content">
          <Link href="/" className="logo">
            Condi-K
          </Link>
          <Search placeholder="Поиск..." />
        </div>
      </div>
    </div>
  );
}

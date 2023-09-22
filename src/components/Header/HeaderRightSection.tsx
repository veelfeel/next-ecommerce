import Link from "next/link";
import CartLink from "./CartLink";
import FavouritesLink from "./FavouritesLink";

export default function HeaderRightSection() {
  return (
    <div className="header__right-section">
      <FavouritesLink />
      <CartLink />
      <Link href="#" className="header__right-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 66 63"
          fill="none"
          strokeWidth="5.5"
          stroke="#989898"
        >
          <circle cx="33" cy="20" r="19" />
          <path d="M1 62V62C14.778 36.5886 51.574 36.4008 65 62V62" />
        </svg>
        <span>Профиль</span>
      </Link>
    </div>
  );
}

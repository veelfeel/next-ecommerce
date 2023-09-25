import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="bottom-navbar">
      <div className="container">
        <ul className="bottom-navbar__items">
          <li>
            <Link href="/" className="bottom-navbar__item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M1 10C1 10 8.57895 1 10 1C11.4211 1 19 10 19 10"
                  stroke={pathname === "/" ? "#ff8888" : "#989898"}
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M15.5294 11.4211C15.5294 11.4211 15.8778 17.3236 15.5294 18.0905C14.9785 19.3032 5.11797 19.3032 4.51202 18.0905C4.07063 17.2072 4.51203 11.4211 4.51203 11.4211"
                  stroke={pathname === "/" ? "#ff8888" : "#989898"}
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span
                style={
                  pathname === "/" ? { color: "#ff8888" } : { color: "#989898" }
                }
              >
                Главная
              </span>
            </Link>
          </li>
          <li>
            <Link href="/products" className="bottom-navbar__item">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M2 2L9.22222 2L15 2"
                  stroke={pathname === "/products" ? "#ff8888" : "#989898"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11 18L9.2647 18L3.756 18L2 18"
                  stroke={pathname === "/products" ? "#ff8888" : "#989898"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18 10L14.915 10L5.12179 10L2 10"
                  stroke={pathname === "/products" ? "#ff8888" : "#989898"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span
                style={
                  pathname === "/products"
                    ? { color: "#ff8888" }
                    : { color: "#989898" }
                }
              >
                Каталог
              </span>
            </Link>
          </li>
          <li>
            <Link href="/favourites" className="bottom-navbar__item">
              <span className="bottom-navbar__item-counter">2</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 44 39"
                fill="none"
                strokeWidth="4"
                stroke={pathname === "/favourites" ? "#ff8888" : "#989898"}
              >
                <path d="M5.09726 5.01265C9.22694 0.995783 15.9225 0.995783 20.0522 5.01265L22 6.90728L23.9478 5.01265C28.0775 0.995783 34.7731 0.995783 38.9027 5.01265C43.0324 9.02952 43.0324 15.5421 38.9027 19.559L22 36L5.09726 19.559C0.96758 15.5421 0.96758 9.02952 5.09726 5.01265Z"></path>
              </svg>
              <span
                style={
                  pathname === "/favourites"
                    ? { color: "#ff8888" }
                    : { color: "#989898" }
                }
              >
                Избранное
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cart" className="bottom-navbar__item">
              <span className="bottom-navbar__item-counter">2</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 25"
                fill="none"
                strokeWidth="2"
                stroke={pathname === "/cart" ? "#ff8888" : "#989898"}
              >
                <path d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z"></path>
                <path d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z"></path>
                <path d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6"></path>
              </svg>

              <span
                style={
                  pathname === "/cart"
                    ? { color: "#ff8888" }
                    : { color: "#989898" }
                }
              >
                Корзина
              </span>
            </Link>
          </li>
          <li>
            <Link href="/signin" className="bottom-navbar__item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 66 63"
                fill="none"
                strokeWidth="5.5"
                stroke={pathname === "/signin" ? "#ff8888" : "#989898"}
              >
                <circle cx="33" cy="20" r="19"></circle>
                <path d="M1 62V62C14.778 36.5886 51.574 36.4008 65 62V62"></path>
              </svg>
              <span
                style={
                  pathname === "/signin"
                    ? { color: "#ff8888" }
                    : { color: "#989898" }
                }
              >
                Профиль
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

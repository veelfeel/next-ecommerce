import Link from "next/link";

export default function CartLink() {
  return (
    <Link href="/cart" className="header__right-item">
      <span className="header-cart-counter">3</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 25"
        fill="none"
        strokeWidth="2"
        stroke="#989898"
      >
        <path d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z" />
        <path d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z" />
        <path d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6" />
      </svg>
      <b>43 830 ₽</b>
    </Link>
  );
}

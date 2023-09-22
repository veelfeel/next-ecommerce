import Link from "next/link";
import React from "react";

export default function CatalogLink() {
  return (
    <div className="header__catalog">
      <i></i>
      <span>Каталог</span>
      <div className="header__catalog-menu">
        <Link href="/products" className="header__catalog-item">
          Кондиционеры
        </Link>
      </div>
    </div>
  );
}

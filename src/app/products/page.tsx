import { IProduct } from "@/@types/Product";
import Breadcrumbs from "@/components/Breadcrumbs";
import FiltersContainer from "@/components/FiltersContainer";
import Product from "@/components/Product";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Купить Кондиционеры в интернет-магазине Condik, отличные цены, бесплатная доставка по городу Сочи. Кондиционеры - огромный каталог, детальная информация, описание и рейтинги",
  description:
    "Доступные цены на Кондиционеры в интернет-магазине www.condik.ru. Купить Кондиционеры по телефону 8 (988) 148-28-38",
};

const products = [
  {
    _id: "1dfsdf4r5",
    title: "Кондиционер Dexp AC-CH9ONF",
    imageUrl: "/products/dexp-ac-ch9onf.jpg",
    price: 25000,
    countInStock: 8,
    rating: 4.1,
    specs: "осушение",
  },
  {
    _id: "safdsdf94",
    title: "Кондиционер Vickers DX-OPVCXF",
    imageUrl: "/products/dexp-ac-ch9onf.jpg",
    price: 41300,
    countInStock: 11,
    rating: 3.8,
    specs: "обогрев",
  },
] as IProduct[];

export default function Products() {
  return (
    <main>
      <div className="catalog-screen screen">
        <div className="container">
          <Breadcrumbs />
          <div className="catalog-screen__title">
            <h1>Кондиционеры (сплит-системы) 118 товаров</h1>
          </div>
          <div className="catalog-screen__main-content">
            <Sidebar />
            <div className="right-bar">
              <FiltersContainer />
              <div className="products-container products-container--list">
                {products.map((product) => (
                  <Product key={product._id} {...product} />
                ))}
              </div>
              {/* {totalPages > 1 && <Pagination />} */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

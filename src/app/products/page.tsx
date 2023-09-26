import { IProduct } from "@/@types/Product";
import Breadcrumbs from "@/components/Breadcrumbs";
import FiltersContainer from "@/components/FiltersContainer";
import Product from "@/components/Product";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import getProducts from "../controllers/getProducts";

export const metadata: Metadata = {
  title:
    "Купить Кондиционеры в интернет-магазине Condik, отличные цены, бесплатная доставка по городу Сочи. Кондиционеры - огромный каталог, детальная информация, описание и рейтинги",
  description:
    "Доступные цены на Кондиционеры в интернет-магазине www.condik.ru. Купить Кондиционеры по телефону 8 (988) 148-28-38",
};

export default async function Products() {
  const products = await getProducts();

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
                {products.map((product: IProduct) => (
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

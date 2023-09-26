import getSingleProduct from "@/app/controllers/getSingleProduct";
import Loading from "@/components/loading";
import Image from "next/image";

export default async function ProductDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getSingleProduct(id);

  return (
    <main className="product-screen screen">
      <div className="container">
        Breadcrumbs
        {/* <Breadcrumbs id={product._id} title={product.title} /> */}
        <h1 className="product-screen__title">{product.title}</h1>
        <div className="product-screen__content-top">
          <Image
            width={270}
            height={270}
            src="/products/dexp-ac-ch9onf.jpg"
            alt={product.title}
            className="product-screen__img"
          />
          <div className="product-screen__title-parameters">product.specs</div>
          CardRating
          {/* <CardRating rating={product.rating} /> */}
          <div className="product-screen__buy">
            <div className="product-screen__buy-top">
              <>
                <div className="product-screen__price">20 000 ₽</div>
                AddFavouritesButton AddCartButton
                {/* <AddFavouritesButton
                    id={product && product._id}
                    onClickAddFavourites={onClickAddFavourites}
                  />
                  <AddCartButton
                    id={product && product._id}
                    onClickAddCart={onClickAddCart}
                  /> */}
              </>
            </div>
            <div className="product-screen__buy-bottom">
              <span>В наличии: 6 шт.</span>
            </div>
          </div>
        </div>
        <div className="product-screen__content-info">
          <div className="product-screen__content-info-title">
            {"Характеристики " + "Название"}
          </div>
          <div className="product-screen__parameters">
            <div className="product-screen__parameters-text-group-title">
              Заводские данные
            </div>
            <div className="product-screen__parameters-text-group">
              <div className="product-screen__parameters-title">
                Гарантия от производителя
              </div>
              <div className="product-screen__parameters-value">24 мес.</div>
            </div>
            {/* {Object.entries(product.characteristics).map(([key, val]) => (
                <div key={key}>
                  <div className="product-screen__parameters-text-group-title">
                    {key}
                  </div>
                  {val.map((x, idx) => (
                    <div
                      key={idx}
                      className="product-screen__parameters-text-group"
                    >
                      <div className="product-screen__parameters-title">
                        {x.title}
                      </div>
                      <div className="product-screen__parameters-value">
                        {x.value}
                      </div>
                    </div>
                  ))}
                </div>
              ))} */}
            Список характеристик
          </div>
        </div>
        <div className="product-screen__content-info">
          <div className="product-screen__content-info-title product-screen__content-info-title--description">
            Описание
          </div>
          <p className="product-screen__description-text">Описание</p>
        </div>
      </div>
    </main>
  );
}

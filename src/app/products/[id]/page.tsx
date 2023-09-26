import getSingleProduct from "@/app/controllers/getSingleProduct";
import AddCartButton from "@/components/AddCartButton";
import AddFavouritesButton from "@/components/AddFavouritesButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardRating from "@/components/CardRating";
import Image from "next/image";

export default async function ProductDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const { _id, title, specs, rating, characteristics, description } =
    await getSingleProduct(id);

  const onClickAddFavourites = () => {};

  const onClickAddCart = () => {};

  return (
    <main className="product-screen screen">
      <div className="container">
        <Breadcrumbs id={_id} title={title} />
        <h1 className="product-screen__title">{title}</h1>
        <div className="product-screen__content-top">
          <Image
            width={270}
            height={270}
            src="/products/dexp-ac-ch9onf.jpg"
            alt={title}
            className="product-screen__img"
          />
          <div className="product-screen__title-parameters">{specs}</div>
          <CardRating rating={rating} />
          <div className="product-screen__buy">
            <div className="product-screen__buy-top">
              <div className="product-screen__price">20 000 ₽</div>
              <AddFavouritesButton
                id={_id}
                onClickAddFavourites={onClickAddFavourites}
              />
              <AddCartButton
                id={_id}
                onClickAddCart={onClickAddCart}
                className="button-primary--done"
              />
            </div>
            <div className="product-screen__buy-bottom">
              <span>В наличии: 6 шт.</span>
            </div>
          </div>
        </div>
        <div className="product-screen__content-info">
          <div className="product-screen__content-info-title">
            {"Характеристики " + title}
          </div>
          <div className="product-screen__parameters">
            {characteristics &&
              Object.entries(characteristics).map(([key, val]) => (
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
              ))}
          </div>
        </div>
        <div className="product-screen__content-info">
          <div className="product-screen__content-info-title product-screen__content-info-title--description">
            Описание
          </div>
          <p className="product-screen__description-text">{description}</p>
        </div>
      </div>
    </main>
  );
}

import Slider from "@/components/Slider";
import { PROMO_ITEMS } from "@/constants/PromoItems";
import PromoBlockOfSlider from "@/components/PromoBlockOfSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condik - супермаркет кондиционеров",
  description:
    "Официальный сайт интернет-магазина сплит-систем Condik. Большой ассортимент бытовых и промышленных кондиционеров, бесплатная доставка по Сочи.",
};

export default function Home() {
  return (
    <main className="home-screen screen">
      <div className="container">
        <div className="home-screen__promo-blocks">
          <Slider
            listItemsForMap={PROMO_ITEMS}
            BlockForSlide={PromoBlockOfSlider}
            sliderHeight="15.3rem"
            adaptive={false}
          />
          {/* <PromoProductOfTheDay /> */}
        </div>
      </div>
    </main>
  );
}

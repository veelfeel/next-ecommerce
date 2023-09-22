import Slider from "@/components/Slider";
import { PROMO_ITEMS } from "@/constants/PromoItems";
import PromoBlockOfSlider from "@/components/PromoBlockOfSlider";

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

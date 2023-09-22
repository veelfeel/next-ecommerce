import { IPromo } from "../constants/PromoItems";
import { IProduct } from "./Product";

export interface ISlider {
  listItemsForMap: IProduct[] | IPromo[];
  BlockForSlide: React.ElementType;
  sliderHeight?: string;
  adaptive: boolean;
  backgroundColor?: string;
}

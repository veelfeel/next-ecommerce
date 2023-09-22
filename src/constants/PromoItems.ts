export interface IPromo {
  imageUrl: string;
  alt: string;
}

export const PROMO_ITEMS = [
  {
    imageUrl: "/slider/promo2.jpg",
    alt: "promo2",
  },
  {
    imageUrl: "/slider/promo1.jpg",
    alt: "promo1",
  },
] as IPromo[];

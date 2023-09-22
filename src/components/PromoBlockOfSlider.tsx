"use client";

import Image from "next/image";
import Link from "next/link";

interface PromoBlockOfSliderProps {
  imageUrl: string;
  alt: string;
}

export default function PromoBlockOfSlider({
  imageUrl,
  alt,
}: PromoBlockOfSliderProps) {
  return (
    <Link href="#">
      <Image
        width={600}
        height={245}
        src={imageUrl}
        alt={alt}
        className="promo-block-of-slider__image"
      />
    </Link>
  );
}

"use client";

import { useParams } from "next/navigation";
import BottomNavbar from "./BottomNavbar";
import BottomAddCart from "./BottomAdCart";

export default function BottomBarsContainer() {
  const { id } = useParams();
  const isFullProductPage = Boolean(id);

  return (
    <div className="bottom-bars-container">
      {isFullProductPage && <BottomAddCart />}
      <BottomNavbar />
    </div>
  );
}

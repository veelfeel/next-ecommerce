"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import Sort from "./Sort";
import ViewProducts from "./ViewProducts";
import Filter from "./Filter";

export default function FiltersContainer() {
  const windowWidth = useWindowWidth();

  return (
    <div className="filters-container">
      <Sort />
      <ViewProducts />
      {windowWidth !== undefined && windowWidth <= 991 && <Filter />}
    </div>
  );
}

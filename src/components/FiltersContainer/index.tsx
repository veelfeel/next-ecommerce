"use client";

import Sort from "./Sort";
import ViewProducts from "./ViewProducts";
import Filter from "./Filter";

export default function FiltersContainer() {
  return (
    <div className="filters-container">
      <Sort />
      <ViewProducts />
      <Filter />
    </div>
  );
}

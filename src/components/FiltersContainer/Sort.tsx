"use client";

import React from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

enum SortEnum {
  RATING_DESC = "-rating",
  PRICE_ASC = "price",
  PRICE_DESC = "-price",
}

type SortItem = {
  name: string;
  sortProperty: SortEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

const sortNames: SortItem[] = [
  { name: "По популярности", sortProperty: SortEnum.RATING_DESC },
  { name: "Сначала недорогие", sortProperty: SortEnum.PRICE_ASC },
  { name: "Сначала дорогие", sortProperty: SortEnum.PRICE_DESC },
];

export default function Sort() {
  const [sortingIsOpen, setSortingIsOpen] = React.useState(false);

  const windowWidth = useWindowWidth();

  const onClickNameSort = (obj: SortItem) => {
    setSortingIsOpen(false);
  };

  return (
    <div className="sort">
      {windowWidth >= 992 && <span>Сортировка:</span>}
      <div
        onClick={() => setSortingIsOpen(!sortingIsOpen)}
        className="sort__select"
      >
        <div className="sort__select-text">Сначала недорогие</div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <rect width="10" height="10" fill="white" />
          <path d="M1 3L5 7L9 3" stroke="#989898" strokeLinecap="round" />
        </svg>
        {sortingIsOpen && (
          <div className="sort__menu">
            <ul>
              {sortNames.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickNameSort(obj)}
                  className="sort__menu-item"
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

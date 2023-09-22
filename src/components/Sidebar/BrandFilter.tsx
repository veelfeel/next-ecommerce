import React from "react";

export default function BrandFilter() {
  const [brandArray, setBrandArray] = React.useState([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="sidebar__item">
      <div className="sidebar__item-title">
        <button className="sidebar__title-btn">
          <span className="sidebar__title-btn-bar"></span>
          <span className="sidebar__title-btn-bar"></span>
        </button>
        <h3 className="sidebar__title-category">Бренд</h3>
      </div>
      <div className="sidebar__item-menu">
        {brandArray.map((brand) => (
          <div key={brand} className="sidebar__category">
            <label className="sidebar__category-label">
              <input
                type="checkbox"
                className="sidebar__category-checkbox"
                value={brand}
                onChange={onChange}
              />
              {brand}
              <span className="sidebar__category-quantity"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

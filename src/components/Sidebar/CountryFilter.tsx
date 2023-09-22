import React from "react";

const countries = ["Все страны", "Турция", "Китай", "Франция", "Италия"];

export default function CountryFilter() {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="sidebar__item">
      <div className="sidebar__item-title">
        <button className="sidebar__title-btn">
          <span className="sidebar__title-btn-bar"></span>
          <span className="sidebar__title-btn-bar"></span>
        </button>
        <h3 className="sidebar__title-category">Страна-производитель</h3>
      </div>
      <div className="sidebar__item-menu">
        {countries.map((country) => (
          <label key={country} className="country-child">
            <input
              className="country-child__input"
              type="radio"
              name="countries"
              value={country}
              checked={true}
              onChange={onChange}
            />
            <span className="design"></span>
            <p>{country}</p>
          </label>
        ))}
      </div>
    </div>
  );
}

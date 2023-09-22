import React from "react";

export default function MobileSidebar() {
  const onClickCloseSidebar = () => {};

  return (
    <div className="sidebar__mobile">
      <div className="sidebar__mobile-header">
        <div className="sidebar__mobile-header-text">Фильтры</div>
        <button onClick={onClickCloseSidebar} className="sidebar__button-close">
          <span className="sidebar__button-close-bar"></span>
          <span className="sidebar__button-close-bar"></span>
        </button>
      </div>
      <div className="sidebar__mobile-content"></div>
      <div className="sidebar__mobile-bottom">
        <button
          onClick={onClickCloseSidebar}
          className="sidebar__mobile-button-apply"
        >
          Показать <span className="sidebar__button-apply-span"></span>
        </button>
      </div>
    </div>
  );
}

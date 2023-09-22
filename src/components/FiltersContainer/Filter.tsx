import React from "react";

export default function Filter() {
  const onClickOpenSidebar = () => {};

  return (
    <button onClick={onClickOpenSidebar} className="category__filter-button">
      <svg width="23" height="20" viewBox="0 0 23 20" fill="none">
        <path
          d="M1.5 14.75C1.08579 14.75 0.75 15.0858 0.75 15.5C0.75 15.9142 1.08579 16.25 1.5 16.25V14.75ZM8.5 16.25H9.25V14.75H8.5V16.25ZM1.5 16.25H8.5V14.75H1.5V16.25Z"
          fill="#989898"
        />
        <path
          d="M20.5 14.75H19.75V16.25H20.5V14.75ZM21.5 16.25C21.9142 16.25 22.25 15.9142 22.25 15.5C22.25 15.0858 21.9142 14.75 21.5 14.75V16.25ZM20.5 16.25H21.5V14.75H20.5V16.25Z"
          fill="#989898"
        />
        <rect
          x="5.25"
          y="0.75"
          width="6.5"
          height="6.5"
          rx="3.25"
          stroke="#989898"
          strokeWidth="1.5"
        />
        <path
          d="M14.5 3.75H13.75V5.25H14.5V3.75ZM21.5 5.25C21.9142 5.25 22.25 4.91421 22.25 4.5C22.25 4.08579 21.9142 3.75 21.5 3.75V5.25ZM14.5 5.25H21.5V3.75H14.5V5.25Z"
          fill="#989898"
        />
        <path
          d="M1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25V3.75ZM2.5 5.25H3.25V3.75H2.5V5.25ZM1.5 5.25H2.5V3.75H1.5V5.25Z"
          fill="#989898"
        />
        <rect
          x="11.25"
          y="12.75"
          width="6.5"
          height="6.5"
          rx="3.25"
          stroke="#989898"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}

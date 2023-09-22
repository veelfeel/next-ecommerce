export default function ViewProducts() {
  const onClickChangeViewProductsContainerToGrid = () => {};

  const onClickChangeViewProductsContainerToList = () => {};

  return (
    <div className="view-products">
      <button
        onClick={onClickChangeViewProductsContainerToGrid}
        className="view-products__grid-button"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="0.75"
            y="0.75"
            width="6.5"
            height="6.5"
            rx="2.25"
            stroke="#989898"
            strokeWidth="1.5"
          />
          <rect
            x="12.75"
            y="0.75"
            width="6.5"
            height="6.5"
            rx="2.25"
            stroke="#989898"
            strokeWidth="1.5"
          />
          <rect
            x="12.75"
            y="12.75"
            width="6.5"
            height="6.5"
            rx="2.25"
            stroke="#989898"
            strokeWidth="1.5"
          />
          <rect
            x="0.75"
            y="12.75"
            width="6.5"
            height="6.5"
            rx="2.25"
            stroke="#989898"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <button
        onClick={onClickChangeViewProductsContainerToList}
        className="view-products__list-button"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="0.75"
            y="0.75"
            width="18.5"
            height="6.5"
            rx="2.25"
            stroke="#989898"
            strokeWidth="1.5"
          />
          <rect
            x="0.75"
            y="12.75"
            width="18.5"
            height="6.5"
            rx="2.25"
            stroke="#989898"
            strokeWidth="1.5"
          />
        </svg>
      </button>
    </div>
  );
}

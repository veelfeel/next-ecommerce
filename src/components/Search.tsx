import React from "react";

export const Search: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
}) => {
  const [value, setValue] = React.useState("");
  const [searchOverlayIsShow, setSearchOverlayIsShow] = React.useState(false);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onFocusInput = () => {
    setSearchOverlayIsShow(true);
  };

  const onBlurInput = () => {
    setSearchOverlayIsShow(false);
  };

  return (
    <>
      <div className="input-search">
        <input
          value={value}
          onChange={onChangeInput}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          placeholder={placeholder}
          type="text"
        />
        <svg className="svg-search" width="20" height="20" viewBox="0 0 32 32">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </svg>
      </div>
      <div
        className={
          searchOverlayIsShow
            ? "input-search-overlay active"
            : "input-search-overlay"
        }
      ></div>
    </>
  );
};

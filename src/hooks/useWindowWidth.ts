import React from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState(getWindowSize());

  function getWindowSize() {
    return window.innerWidth;
  }

  React.useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(getWindowSize());
    }

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return windowWidth;
}

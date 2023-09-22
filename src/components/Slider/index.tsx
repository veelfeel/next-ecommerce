"use client";

import React from "react";
import { ISlider } from "@/@types/Slider";
import Slide from "./Slide";

export default function Slider({
  listItemsForMap,
  BlockForSlide,
  sliderHeight,
  adaptive,
  backgroundColor,
}: ISlider) {
  const [width, setWidth] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const [slidesOnWindow, setSlidesOnWindow] = React.useState(1);

  const dragging = React.useRef(false);
  const startPos = React.useRef(0);
  const currentTranslate = React.useRef(0);
  const prevTranslate = React.useRef(0);
  const currentIndex = React.useRef<number | null>(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const animationRef = React.useRef<number | null>(null);

  let threshHold = 40;
  let transition = 0.5;

  const increment = () => {
    if (index < listItemsForMap.length - 1) setIndex(index + 1);
  };

  const decrement = () => {
    if (index > 0) setIndex(index - 1);
  };

  const setPositionByIndex = React.useCallback(
    (w = width) => {
      if (listItemsForMap.length - slidesOnWindow < index) {
        currentIndex.current! -= 1;
        setIndex(currentIndex.current!);
      }

      currentTranslate.current = currentIndex.current! * -w;
      prevTranslate.current = currentTranslate.current;
      setSliderPosition();
    },
    [width]
  );

  const transitionOn = React.useCallback(() => {
    if (sliderRef.current)
      sliderRef.current.style.transition = `transform ${transition}s cubic-bezier(0.35, 1.44, 0, 0.95)`;
  }, [transition]);

  const transitionOff = () => {
    if (sliderRef.current) sliderRef.current.style.transition = "none";
  };

  const handleResize = () => {
    transitionOff();

    if (adaptive) {
      if (window.innerWidth <= 579.9) {
        setSlidesOnWindow(1);
      }

      if (window.innerWidth > 580 && window.innerWidth < 990.9) {
        setSlidesOnWindow(2);
      }

      if (window.innerWidth > 991 && window.innerWidth < 1239.9) {
        setSlidesOnWindow(3);
      }

      if (window.innerWidth >= 1240) {
        setSlidesOnWindow(4);
      }
    }

    if (sliderRef.current) {
      setWidth(sliderRef.current.clientWidth / slidesOnWindow);
    }
    setPositionByIndex(width);
  };

  function touchStart(e: any) {
    transitionOff();
    startPos.current = getPositionX(e);
    dragging.current = true;
    animationRef.current = requestAnimationFrame(animation);
  }

  function touchMove(e: any) {
    if (dragging.current) {
      const currentPosition = getPositionX(e);
      currentTranslate.current =
        prevTranslate.current + currentPosition - startPos.current;
    }
  }

  function touchEnd() {
    transitionOn();
    cancelAnimationFrame(animationRef.current!);
    dragging.current = false;
    const movedBy = currentTranslate.current - prevTranslate.current;

    if (
      movedBy < -threshHold &&
      currentIndex.current! < listItemsForMap.length - slidesOnWindow
    ) {
      currentIndex.current! += 1;
    }

    if (movedBy > threshHold && currentIndex.current! > 0) {
      currentIndex.current! -= 1;
    }

    transitionOn();

    setPositionByIndex();
    setIndex(currentIndex.current!);
  }

  function getPositionX(e: any) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
  }

  function animation() {
    setSliderPosition();
    if (dragging.current) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    if (sliderRef.current)
      sliderRef.current.style.transform = `translate3d(${currentTranslate.current}px,0,0)`;
  }

  React.useEffect(() => {
    if (index !== currentIndex.current) {
      transitionOn();
      currentIndex.current = index;
      setPositionByIndex();
    }
  }, [index, setPositionByIndex, transitionOn]);

  React.useLayoutEffect(() => {
    handleResize();
  }, [setPositionByIndex]);

  React.useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      const arrowsPressed = ["ArrowRight", "ArrowLeft"].includes(key);
      if (arrowsPressed) transitionOn();

      if (
        key === "ArrowRight" &&
        currentIndex.current! < listItemsForMap.length - 1
      ) {
        currentIndex.current! += 1;
      }
      if (key === "ArrowLeft" && currentIndex.current! > 0) {
        currentIndex.current! -= 1;
      }
      if (arrowsPressed && setIndex) setIndex(currentIndex.current!);
      setPositionByIndex();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [listItemsForMap.length, setPositionByIndex, setIndex, transitionOn]);

  return (
    <div style={{ height: sliderHeight, backgroundColor }} className="slider">
      <button
        className="slider__button"
        onClick={decrement}
        disabled={index === 0}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M7 1L3 5L7 9" stroke="#fff" strokeLinecap="round" />
        </svg>
      </button>
      <button
        className="slider__button"
        onClick={increment}
        disabled={index === listItemsForMap.length - slidesOnWindow}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M3 9L7 5L3 1" stroke="#fff" strokeLinecap="round" />
        </svg>
      </button>
      <div
        ref={sliderRef}
        style={{
          width: "100%",
          height: "100%",
          display: "inline-flex",
        }}
      >
        {listItemsForMap.map((item, index) => (
          <div
            key={index}
            onMouseDown={touchStart}
            onMouseMove={touchMove}
            onMouseUp={touchEnd}
            onMouseLeave={() => {
              if (dragging.current) touchEnd();
            }}
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
            onTouchCancel={() => {
              if (dragging.current) touchEnd();
            }}
            className="slide-outer"
          >
            <Slide sliderWidth={width} block={<BlockForSlide {...item} />} />
          </div>
        ))}
      </div>
    </div>
  );
}

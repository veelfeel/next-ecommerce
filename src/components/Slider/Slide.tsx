import React from "react";

interface SlideProps {
  sliderWidth: number;
  block: React.ReactNode;
}

export default function Slide(props: SlideProps) {
  return (
    <div
      onDragStart={(e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }}
      style={{
        width: `${props.sliderWidth}px`,
        height: "100%",
      }}
      className="slider__item"
    >
      {props.block}
    </div>
  );
}

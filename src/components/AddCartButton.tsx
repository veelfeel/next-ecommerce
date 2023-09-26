import React from "react";

interface AddCartButtonProps {
  id: string | null;
  onClickAddCart: () => void;
  className?: string;
}

export default function AddCartButton({
  id,
  onClickAddCart,
  className,
}: AddCartButtonProps) {
  return (
    <button
      className={className ? `button-primary ${className}` : "button-primary"}
      title="Добавить в корзину"
    >
      Купить
    </button>
  );
}

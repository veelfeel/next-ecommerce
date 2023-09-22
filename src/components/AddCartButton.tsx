import React from "react";

type AddCartButtonProps = {
  id: string | null;
  onClickAddCart: () => void;
};

export default function AddCartButton({
  id,
  onClickAddCart,
}: AddCartButtonProps) {
  return (
    <button className="button-primary" title="Добавить в корзину">
      Купить
    </button>
  );
}

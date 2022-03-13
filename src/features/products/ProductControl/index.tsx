import React, { ChangeEvent } from "react";
import { Img, Textarea, Input } from "@src/components/UI";
import { ProductType } from "../types";
import "./ProductControl.scss";

type ProductControlComponentType = {
  product: ProductType;
  onChange: (Product: ProductType) => void;
};

const getDiscountPrice = (price: number, discountPercent: number) =>
  price - price * (discountPercent / 100);

export const ProductControl = ({
  product,
  onChange,
}: ProductControlComponentType): JSX.Element => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    let productEdit = {} as ProductType;

    if (name === "discountPercent") {
      productEdit = {
        ...product,
        ...{
          [name]: Number(value),
          discountPrice: getDiscountPrice(product.price || 0, Number(value)),
        },
      };
    } else if (name === "price") {
      productEdit = {
        ...product,
        ...{
          [name]: Number(value),
          discountPrice: getDiscountPrice(
            Number(value),
            product.discountPercent || 0
          ),
        },
      };
    } else {
      productEdit = {
        ...product,
        [name]: type === "number" ? Number(value) : value,
      };
    }

    onChange(productEdit);
  };

  return (
    <div className="card__control">
      <div className="card__control__title">
        <Input
          value={product.title || ""}
          placeholder="Заголовок"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className="card__control__body">
        <div className="card__control__info">
          <div className="card__control__desc">
            <Textarea
              name="desc"
              placeholder="Описание"
              value={product.desc || ""}
              onChange={handleChange}
            />
          </div>
          <div className="card__control__grid">
            <Input
              label="Закупочная цена:"
              type="number"
              value={product.purchasePrice || 0}
              name="purchasePrice"
              onChange={handleChange}
            />
            <Input
              label="Цена:"
              type="number"
              value={product.price || 0}
              name="price"
              onChange={handleChange}
            />
            <Input
              label="Скидка:"
              type="number"
              value={product.discountPercent || 0}
              name="discountPercent"
              elemRight="%"
              onChange={handleChange}
            />
            <Input
              label="Цена со скидкой:"
              type="number"
              value={product.discountPrice || 0}
              name="discountPrice"
              disabled
              onChange={handleChange}
            />
          </div>
          <Input
            label="Категория:"
            value={product.categoryName || ""}
            name="categoryName"
            onChange={handleChange}
          />
        </div>
        <div className="card__control__img">
          <Img
            src={`${
              product.imgUrl
                ? `../images/${product.imgUrl}`
                : "../images/no-image.png"
            }`}
            alt={product.title ? product.title : ""}
          />
        </div>
      </div>
    </div>
  );
};

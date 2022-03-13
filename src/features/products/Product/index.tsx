import React from "react";
import { DiscountPrice } from "@src/components/Styles";
import { Checkbox, Img } from "@src/components/UI";
import { ProductType, ViewFieldsType } from "../types";

import "./Product";

export type ProductComponentType = {
  product: ProductType;
  isSelected: boolean;
  viewFields?: ViewFieldsType<ProductType>;
  selectProduct?: (isSelected: boolean, product: ProductType) => void;
};

export const Product = ({
  product,
  isSelected,
  viewFields = {},
  selectProduct,
}: ProductComponentType): JSX.Element => {
  const isViewFields = Object.keys(viewFields).length;

  const handleSelectChange = (product: ProductType) => () => {
    if (selectProduct) {
      selectProduct(isSelected, product);
    }
  };

  return (
    <div className="card">
      <div className="card__header">
        {product.imgUrl && (!isViewFields || viewFields.imgUrl) ? (
          <div className="card__img">
            <Img
              src={`${
                product.imgUrl
                  ? `../images/${product.imgUrl}`
                  : "../images/no-image.png"
              }`}
              alt={product.title || ""}
            />
          </div>
        ) : null}
        <div className="card__actions">
          <Checkbox
            checked={isSelected}
            onChange={handleSelectChange(product)}
          />
        </div>
      </div>
      <div className="card__body">
        <div className="card__title">{product.title}</div>
        {product.desc && (!isViewFields || viewFields.desc) ? (
          <div className="card__desc">{product.desc}</div>
        ) : null}
        <ul className="card_list">
          {!isViewFields || viewFields.purchasePrice ? (
            <li>
              <div>Закупочная цена:</div>
              <div>{product.purchasePrice}</div>
            </li>
          ) : null}

          {!isViewFields || viewFields.price ? (
            <li>
              <div>Цена:</div>
              <div>
                {product.discountPercent ? (
                  <DiscountPrice price={product.price} />
                ) : (
                  product.price
                )}
              </div>
            </li>
          ) : null}

          {!isViewFields || viewFields.discountPrice ? (
            <li>
              <div>Цена со скидкой:</div>
              <div>
                {product.discountPercent ? (
                  <DiscountPrice discountPrice={product.discountPrice} />
                ) : (
                  product.discountPrice
                )}
              </div>
            </li>
          ) : null}

          {!isViewFields || viewFields.discountPercent ? (
            <li>
              <div>Скидка:</div>
              <div>
                {product.discountPercent && `-${product.discountPercent}%`}
              </div>
            </li>
          ) : null}

          {!isViewFields || viewFields.categoryName ? (
            <li>
              <div>Категория:</div>
              <div>{product.categoryName}</div>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

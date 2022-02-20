import React from "react";
import styled from "styled-components";
import { DiscountPrice } from "@src/components/Styles";
import { IconButton, Img } from "@src/components/UI";

import { ProductType } from "../ducks";

import "./product.scss";

export type ViewFieldsType<T> = { [K in keyof T]?: boolean };

type ProductItemType<T> = {
  product: ProductType;
  viewFields: ViewFieldsType<T>;
};

const CardActions = styled.div`
  & button:hover {
    &.btn-edit {
      color: #ffba00;
    }
    &.btn-remove {
      color: #f50057;
    }
  }
`;

export const ProductItem = ({
  product,
  viewFields,
}: ProductItemType<ProductType>): JSX.Element => {
  const isViewFields = Object.keys(viewFields).length;

  return (
    <div className="card">
      <div className="card_header">
        {product.imgUrl && (!isViewFields || viewFields.imgUrl) ? (
          <div className="card_img">
            <Img
              src={`../images/${product.imgUrl}`}
              alt={product.title ? product.title : ""}
            />
          </div>
        ) : null}
        <div className="card_wrap_actions">
          <CardActions className="card_actions">
            <IconButton className="btn-edit">edit</IconButton>
            <IconButton className="btn-remove">delete_forever</IconButton>
          </CardActions>
        </div>
      </div>
      <div className="card_body">
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

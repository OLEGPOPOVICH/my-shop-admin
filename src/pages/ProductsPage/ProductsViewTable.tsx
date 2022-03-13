/* eslint-disable require-jsdoc */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, DataGridType, GridRenderCellParams } from "@src/components/UI";
import { WrapperText, WrapperImg, DiscountPrice } from "@src/components/Styles";
import {
  ProductsTable,
  getProductsThunkCreator,
  productsErrorSelectors,
  productsSelectors,
} from "@src/features/products";
import { loadersSelectors, LoaderWrap } from "@src/features/loaders";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "imgUrl",
    headerName: "Картинка",
    sortable: false,
    disableColumnMenu: true,
    editable: true,
    cellClassName: "even__col",
    renderCell: (params: GridRenderCellParams) => (
      <WrapperImg maxHeight="100%" maxWidth="100%">
        <img
          className="productListImg"
          src={`../images/${params.row.imgUrl}`}
          alt={params.row.title}
        />
      </WrapperImg>
    ),
  },
  {
    field: "desc",
    headerName: "Описание",
    width: 300,
    sortable: false,
    disableColumnMenu: true,
    editable: true,
    renderCell: ({ row }: GridRenderCellParams) => (
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "10px 0",
        }}
      >
        <Box
          component="div"
          sx={{
            paddingBottom: "5px",
            whiteSpace: "break-spaces",
            fontWeight: "600",
          }}
        >
          {row.title}
        </Box>
        <WrapperText>{row.desc}</WrapperText>
      </Box>
    ),
  },
  {
    field: "categoryName",
    headerName: "Категория",
    width: 110,
    sortable: false,
    disableColumnMenu: true,
    editable: true,
    cellClassName: "even__col",
  },
  {
    field: "purchasePrice",
    headerName: "Закупочная цена",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
    editable: true,
  },
  {
    field: "discountPrice",
    headerName: "Цена со скидкой",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
    editable: true,
    cellClassName: "even__col",
    renderCell: ({ row }: GridRenderCellParams) =>
      row.discountPercent ? (
        <DiscountPrice discountPrice={row.discountPrice} />
      ) : (
        row.discountPrice
      ),
  },
  {
    field: "price",
    headerName: "Цена",
    width: 100,
    sortable: false,
    disableColumnMenu: true,
    editable: true,
    renderCell: ({ row }: GridRenderCellParams): number =>
      row.discountPercent ? <DiscountPrice price={row.price} /> : row.price,
  },
  {
    field: "discountPercent",
    headerName: "Скидка",
    width: 100,
    sortable: false,
    disableColumnMenu: true,
    cellClassName: "even__col",
    renderCell: ({ row }: GridRenderCellParams): string | null =>
      row.discountPercent && `-${row.discountPercent}%`,
  },
];

type ProductsViewTableType = Pick<
  DataGridType,
  "onSelectionModelChange" | "selectionModel"
>;

export const ProductsViewTable = ({
  onSelectionModelChange,
  selectionModel,
}: ProductsViewTableType) => {
  const dispatch = useDispatch();
  const loaders = useSelector(loadersSelectors());
  const productsError = useSelector(productsErrorSelectors());
  const products = useSelector(productsSelectors());
  const countDataPerPage = 5;

  useEffect(() => {
    dispatch(getProductsThunkCreator());
  }, []);

  return (
    <LoaderWrap loader={loaders.products} error={productsError}>
      <Box
        sx={{
          "& .even__col": {
            backgroundColor: "#f3f1f1",
          },
        }}
      >
        <ProductsTable
          rows={products}
          columns={columns}
          pageSize={countDataPerPage}
          rowHeight={120}
          onSelectionModelChange={onSelectionModelChange}
          selectionModel={selectionModel}
        />
      </Box>
    </LoaderWrap>
  );
};

import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Pagination,
  FormControlLabel,
  Checkbox,
} from "@src/components/UI";
import { Grid } from "@src/components/Styles";
import {
  Product,
  productsDataSelectors,
  productsErrorSelectors,
  settingsFieldsSelectors,
  SettingsFieldType,
  getProductsThunkCreator,
  getSettingsFieldsThunkCreator,
  settingsFieldsErrorSelectors,
  ProductType,
  setProducts,
  setSettingsFields,
} from "@src/features/products";
import { LoaderWrap, loadersSelectors } from "@src/features/loaders";

type ProductsViewGridType = {
  isSettingsViewProduct: boolean;
  productIds: string[];
  selectProduct: (isSelected: boolean, id: string) => void;
};

type SettingsFieldsType = { [k: string]: boolean };

const convertSettingFields = (settings: SettingsFieldType[]) =>
  settings.reduce((acc: SettingsFieldsType, next) => {
    acc[next.name] = next.checked;

    return acc;
  }, {});

export const ProductsViewGrid = ({
  isSettingsViewProduct,
  productIds,
  selectProduct,
}: ProductsViewGridType) => {
  const dispatch = useDispatch();
  const [currentPage, setPage] = useState(1);

  const [selectedFields, setSelectedFields] = useState<SettingsFieldsType>({});
  const loaders = useSelector(loadersSelectors());
  const productsData = useSelector(productsDataSelectors());
  const productsError = useSelector(productsErrorSelectors());
  const settingsFields = useSelector(settingsFieldsSelectors());
  const settingsFieldsError = useSelector(settingsFieldsErrorSelectors());

  const countDataPerPage = 14;
  const countPage = Math.ceil(productsData.total / countDataPerPage);

  const handleSettingsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fields: { [k: string]: boolean } = { ...selectedFields };
    fields[event.target.name] = event.target.checked;
    setSelectedFields({ ...fields });
  };

  const handlePaginationChange = (
    _event: ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSelectProduct = (isSelected: boolean, product: ProductType) => {
    selectProduct(isSelected, product.id);
  };

  useEffect(() => {
    if (!Object.keys(selectedFields).length) {
      setSelectedFields(convertSettingFields(settingsFields));
    }
  }, [settingsFields]);

  useEffect(() => {
    if (!Object.keys(selectedFields).length) {
      dispatch(getSettingsFieldsThunkCreator());
    }

    dispatch(
      getProductsThunkCreator({
        currentPage,
        countDataPerPage,
      })
    );
  }, [currentPage]);

  useEffect(
    () => () => {
      dispatch(
        setProducts({
          products: [],
          total: 0,
        })
      );
      dispatch(setSettingsFields([]));
    },
    []
  );

  return (
    <>
      {isSettingsViewProduct ? (
        <Box
          component="div"
          sx={{
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "white",
          }}
        >
          <LoaderWrap
            height="50"
            loader={loaders.settingsFields}
            error={settingsFieldsError}
          >
            {settingsFields.map((settingField) => (
              <FormControlLabel
                key={settingField.name}
                label={settingField.label}
                control={
                  <Checkbox
                    checked={selectedFields[settingField.name]}
                    name={settingField.name}
                    onChange={handleSettingsChange}
                  />
                }
              />
            ))}
          </LoaderWrap>
        </Box>
      ) : null}

      <LoaderWrap
        height="100"
        loader={loaders.products || loaders.settingsFields}
        error={productsError}
      >
        <Grid
          data={productsData.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              isSelected={productIds.includes(product.id)}
              viewFields={selectedFields}
              selectProduct={handleSelectProduct}
            />
          ))}
        ></Grid>
        <Box
          component="div"
          sx={{
            margin: "40px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={countPage}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            size="large"
            onChange={handlePaginationChange}
          />
        </Box>
      </LoaderWrap>
    </>
  );
};

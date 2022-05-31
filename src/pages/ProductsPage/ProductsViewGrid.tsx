import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Pagination,
  FormControlLabel,
  Checkbox,
} from "@common/components/UI";
import { Grid } from "@common/components/Styles";
import {
  Product,
  productsActions,
  productsSelectors,
  SettingsFieldType,
  ProductType,
} from "@features/products";
import { productsProcesses } from "@processes/products";
import { Loader, loadersSelectors } from "@features/loaders";

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
  const loaders = useSelector(loadersSelectors.getLoaders());
  const productsData = useSelector(productsSelectors.getProductsData());
  const settingsFields = useSelector(productsSelectors.getSettingsFields());

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
      dispatch(productsProcesses.getSettingsFields());
    }

    dispatch(
      productsProcesses.getProducts({
        currentPage,
        countDataPerPage,
      })
    );
  }, [currentPage]);

  useEffect(
    () => () => {
      dispatch(
        productsActions.setProducts({
          products: [],
          total: 0,
        })
      );
      dispatch(productsActions.setSettingsFields([]));
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
          <Loader height={50} loader={loaders.settingsFields}>
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
          </Loader>
        </Box>
      ) : null}

      <Loader height={100} loader={loaders.products || loaders.settingsFields}>
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
      </Loader>
    </>
  );
};

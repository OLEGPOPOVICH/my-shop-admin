import React, { useState } from "react";
import styled from "styled-components";

import { Button, IconButton } from "@src/components/UI";
import { ProductsViewTable } from "./ProductsViewTable";
import { ProductsViewGrid } from "./ProductsViewGrid";
import { ViewType } from "@src/features/products";

export const ProductsPage = (): JSX.Element => {
  const [viewType, setViewType] = useState<ViewType>(ViewType.grid);
  const [isSettingsViewProduct, setIsSettingsViewProduct] =
    useState<boolean>(false);

  return (
    <>
      <ToolBar>
        <Actions>
          <Button type="button" className="button primary">
            Добавить
          </Button>
          {viewType === ViewType.table ? (
            <>
              <Button type="button" className="button secondary">
                Изменить
              </Button>
              <Button type="button" className="button danger">
                Удалить
              </Button>
            </>
          ) : null}
        </Actions>
        <ViewActions>
          {viewType === ViewType.grid ? (
            <IconButton
              type="button"
              onClick={() => setIsSettingsViewProduct(!isSettingsViewProduct)}
            >
              settings
            </IconButton>
          ) : null}
          <IconButton
            type="button"
            className={`${viewType === ViewType.table ? "active" : ""}`}
            onClick={() => setViewType(ViewType.table)}
          >
            list
          </IconButton>
          <IconButton
            type="button"
            className={`${viewType === ViewType.grid ? "active" : ""}`}
            onClick={() => setViewType(ViewType.grid)}
          >
            grid_view
          </IconButton>
        </ViewActions>
      </ToolBar>

      {viewType === ViewType.table ? (
        <ProductsViewTable />
      ) : (
        <ProductsViewGrid isSettingsViewProduct={isSettingsViewProduct} />
      )}
    </>
  );
};

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Actions = styled.div`
  > button:nth-child(n + 2) {
    margin-left: 15px;
  }
`;

const ViewActions = styled.div`
  > button:nth-child(n + 2) {
    margin-left: 15px;
  }
`;

import * as React from "react";
import { DataGrid, DataGridType } from "@src/components/UI/";

export const ProductsTable = ({
  rows,
  columns,
  pageSize,
  rowHeight,
  getCellClassName,
  onPageChange,
  onSelectionModelChange,
  selectionModel,
}: DataGridType): JSX.Element => (
  <DataGrid
    rows={rows}
    columns={columns}
    pageSize={pageSize}
    rowHeight={rowHeight}
    getCellClassName={getCellClassName}
    onPageChange={onPageChange}
    onSelectionModelChange={onSelectionModelChange}
    selectionModel={selectionModel}
  />
);

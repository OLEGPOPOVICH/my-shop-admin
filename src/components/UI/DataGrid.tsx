import * as React from "react";
import {
  DataGrid as DataGridM,
  GridRowData,
  GridColDef,
  GridCellParams,
  GridCallbackDetails,
} from "@mui/x-data-grid";

export {
  GridColDef,
  GridRowData,
  GridRenderCellParams,
  GridValueFormatterParams,
  GridValueGetterParams,
  GridValueGetterFullParams,
  GridCellParams,
} from "@mui/x-data-grid";

type getCellClassName = (params: GridCellParams) => string;

export type DataGridType = {
  rows: GridRowData[];
  columns: GridColDef[];
  pageSize: number;
  rowHeight: number;
  getCellClassName?: undefined | getCellClassName;
  onPageChange?: (page: number, details: GridCallbackDetails) => void;
};

export const DataGrid = ({
  rows,
  columns,
  pageSize,
  rowHeight,
  getCellClassName,
  onPageChange,
}: DataGridType): JSX.Element => (
  <DataGridM
    rows={rows}
    columns={columns}
    pageSize={pageSize}
    autoHeight
    rowHeight={rowHeight}
    getCellClassName={getCellClassName}
    checkboxSelection
    onPageChange={onPageChange}
  />
);

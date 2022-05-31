import * as React from "react";
import {
  DataGrid as DataGridM,
  GridRowData,
  GridColDef,
  GridCellParams,
  GridCallbackDetails,
  GridSelectionModel,
} from "@mui/x-data-grid";

export {
  GridColDef,
  GridRowData,
  GridRenderCellParams,
  GridValueFormatterParams,
  GridValueGetterParams,
  GridValueGetterFullParams,
  GridCellParams,
  GridCallbackDetails,
  GridSelectionModel,
} from "@mui/x-data-grid";

type getCellClassName = (params: GridCellParams) => string;

export type DataGridType = {
  rows: GridRowData[];
  columns: GridColDef[];
  pageSize: number;
  rowHeight: number;
  getCellClassName?: undefined | getCellClassName;
  onPageChange?: (page: number, details: GridCallbackDetails) => void;
  onSelectionModelChange?: (
    selectionModel: GridSelectionModel,
    details: GridCallbackDetails
  ) => void;
  selectionModel?: GridSelectionModel;
};

export const DataGrid = ({
  rows,
  columns,
  pageSize,
  rowHeight,
  getCellClassName,
  onPageChange,
  onSelectionModelChange,
  selectionModel,
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
    onSelectionModelChange={onSelectionModelChange}
    selectionModel={selectionModel}
  />
);

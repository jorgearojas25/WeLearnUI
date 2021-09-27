import * as React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 160 },
  { field: "name", headerName: "Name", width: 160 },
  { field: "url", headerName: "URL", width: 300 },
];

export default function ResourcesTable({
  height,
  resources,
  canSelect,
  onSelectionModelChange,
  selectionModel,
}) {
  const rows = resources;

  if (!resources) {
    return null;
  }

  return (
    <div style={{ height: height, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[15]}
        checkboxSelection={canSelect}
        onSelectionModelChange={onSelectionModelChange}
        selectionModel={selectionModel}
      />
    </div>
  );
}

ResourcesTable.defaultProps = {
  height: 300,
  canSelect: false,
  onSelectionModelChange: () => {},
  selectionModel: [],
  resources: [],
};

ResourcesTable.propTypes = {
  height: PropTypes.number,
  canSelect: PropTypes.bool,
  onSelectionModelChange: PropTypes.func,
  selectionModel: PropTypes.array,
  resources: PropTypes.array,
};

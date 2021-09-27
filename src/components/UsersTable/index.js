import * as React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 160 },
  { field: "name", headerName: "Name", width: 160 },
  { field: "email", headerName: "Email", width: 300 },
];

export default function UsersTable({
  height,
  users,
  canSelect,
  onSelectionModelChange,
  selectionModel,
}) {
  const rows = users;

  if (!users) {
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

UsersTable.defaultProps = {
  height: 300,
  canSelect: false,
  onSelectionModelChange: () => {},
  selectionModel: [],
  users: [],
};

UsersTable.propTypes = {
  height: PropTypes.number,
  canSelect: PropTypes.bool,
  onSelectionModelChange: PropTypes.func,
  selectionModel: PropTypes.array,
  users: PropTypes.array,
};

import React from "react";
import LayoutContainer from "layouts/Containers/DashboardLayout";
import TopNavbar from "components/TopNavbar";
import UsersTable from "components/UsersTable";
import Box from "@mui/material/Box";
import { Switch, Typography } from "@mui/material";
import UsersForm from "components/UsersForm";
import { users } from "mocks";

function Users() {
  const [showForm, setShowForm] = React.useState(false);

  const handleSwitch = React.useCallback((event) => {
    setShowForm(event.target.checked);
  }, []);

  const renderContent = React.useMemo(() => {
    if (showForm) {
      return <UsersForm />;
    }
    return <UsersTable users={users} height={700} />;
  }, [showForm]);

  return (
    <LayoutContainer>
      <TopNavbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography>Ver Lista</Typography>
        <Switch checked={showForm} onChange={handleSwitch} sx={{ margin: "0 2rem 0 2rem" }} />
        <Typography>Agregar</Typography>
      </Box>
      {renderContent}
    </LayoutContainer>
  );
}

export default Users;

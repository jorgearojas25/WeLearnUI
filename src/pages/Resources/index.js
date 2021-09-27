import React from "react";
import LayoutContainer from "layouts/Containers/DashboardLayout";
import TopNavbar from "components/TopNavbar";
import ResourcesTable from "components/ResourcesTable";
import Box from "@mui/material/Box";
import { Switch, Typography } from "@mui/material";
import ResourcesForm from "components/ResourcesForm";
import { resources } from "mocks";

function Resources() {
  const [showForm, setShowForm] = React.useState(false);

  const handleSwitch = React.useCallback((event) => {
    setShowForm(event.target.checked);
  }, []);

  const renderContent = React.useMemo(() => {
    if (showForm) {
      return <ResourcesForm />;
    }
    return <ResourcesTable resources={resources} height={700} />;
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

export default Resources;

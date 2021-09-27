import React from "react";
import LayoutContainer from "layouts/Containers/DashboardLayout";
import TopNavbar from "components/TopNavbar";
import ResourcesTable from "components/ResourcesTable";
import Box from "@mui/material/Box";
import { Switch, Typography } from "@mui/material";
import ResourcesForm from "components/ResourcesForm";
import { useSelector, useDispatch } from "react-redux";
import { getResources } from "store/reducers/resourcesReducer";

function Resources() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = React.useState(true);
  const resources = useSelector((state) => state.reosurcesReducer);

  const handleSwitch = React.useCallback((event) => {
    setShowForm(event.target.checked);
  }, []);

  const renderContent = React.useMemo(() => {
    if (!resources) {
      setShowForm(true);
    }
    if (!showForm && resources) {
      return <ResourcesTable resources={resources} height={700} />;
    }
    return <ResourcesForm />;
  }, [showForm, resources]);

  React.useEffect(() => {
    dispatch(getResources());
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

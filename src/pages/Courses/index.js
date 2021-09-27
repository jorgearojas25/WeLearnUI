import React from "react";
import LayoutContainer from "layouts/Containers/DashboardLayout";
import TopNavbar from "components/TopNavbar";
import CoursesTable from "components/CoursesTable";
import Box from "@mui/material/Box";
import { Switch, Typography } from "@mui/material";
import CoursesForm from "components/CoursesForm";

import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "store/reducers/usersReducer";
import { getResources } from "store/reducers/resourcesReducer";

function Resources() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = React.useState(false);
  const users = useSelector((state) => state.userReducer);
  const resources = useSelector((state) => state.resourcesReducer);

  const handleSwitch = React.useCallback((event) => {
    setShowForm(event.target.checked);
  }, []);

  const renderContent = React.useMemo(() => {
    if (showForm) {
      return <CoursesForm users={users} resources={resources} />;
    }
    return <CoursesTable />;
  }, [showForm]);

  React.useEffect(() => {
    dispatch(getUsers());
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

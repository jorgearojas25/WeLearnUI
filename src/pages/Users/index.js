import React from "react";
import LayoutContainer from "layouts/Containers/DashboardLayout";
import TopNavbar from "components/TopNavbar";
import UsersTable from "components/UsersTable";
import Box from "@mui/material/Box";
import { Switch, Typography } from "@mui/material";
import UsersForm from "components/UsersForm";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "store/reducers/usersReducer";

function Users() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = React.useState(true);
  const users = useSelector((state) => state.userReducer);

  const handleSwitch = React.useCallback((event) => {
    setShowForm(event.target.checked);
  }, []);

  const renderContent = React.useMemo(() => {
    if (!users) {
      setShowForm(true);
    }
    if (!showForm && users) {
      return <UsersTable users={users} height={700} />;
    }
    return <UsersForm />;
  }, [showForm, users]);

  React.useEffect(() => {
    dispatch(getUsers());
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

import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import UsersTable from "components/UsersTable";
import ResourcesTable from "components/ResourcesTable";
import { useDispatch } from "react-redux";
import { postCourses } from "store/reducers/coursesReducer";

function CoursesForm({ users, resources }) {
  const [name, setName] = React.useState("");
  const [founder, setFounder] = React.useState("select one");
  const [inputValue, setInputValue] = React.useState("");
  const [foundersOptions, setFoundersOptions] = React.useState([]);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [studentsSelectionModel, setStudentsSelectionModel] = React.useState([]);
  const [resourcesSelectionModel, setResourcesSelectionModel] = React.useState([]);

  const onStudentsModelChange = React.useCallback((newSelectionModel) => {
    setStudentsSelectionModel(newSelectionModel);
  }, []);
  const onResourceModelChange = React.useCallback((newSelectionModel) => {
    setResourcesSelectionModel(newSelectionModel);
  }, []);

  const dispatch = useDispatch();

  const submitForm = () => {
    console.log(
      name,
      founder.value,
      (users || []).filter((user) => studentsSelectionModel.includes(user.id)),
      (resources || []).filter((resource) => resourcesSelectionModel.includes(resource.id))
    );
    dispatch(
      postCourses(
        name,
        founder?.value,
        (users || []).filter((user) => studentsSelectionModel.includes(user.id)),
        (resources || []).filter((resource) => resourcesSelectionModel.includes(resource.id))
      )
    );
  };

  React.useEffect(() => {
    setFoundersOptions(
      users.filter((user) => user.id).map((user) => ({ label: user.name, value: user }))
    );
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexFlow: "column nowrap", alignItems: "center" }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography marginTop="1rem">Name: </Typography>
        <TextField
          sx={{ width: "10rem" }}
          id="name-input"
          label="Name"
          placeholder="Name"
          variant="standard"
          value={name}
          onChange={handleNameChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "1.5rem",
        }}
      >
        <Typography>Founder: </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={foundersOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Founder" />}
          value={founder}
          onChange={(event, newValue) => {
            setFounder(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "1.5rem",
          width: "100%",
        }}
      >
        <Typography>Students: </Typography>

        <UsersTable
          users={users}
          canSelect
          selectionModel={studentsSelectionModel}
          onSelectionModelChange={onStudentsModelChange}
        />
      </Box>
      <Box
        sx={{
          marginTop: "1.5rem",
          width: "100%",
        }}
      >
        <Typography>Resources: </Typography>
        <ResourcesTable
          canSelect
          selectionModel={resourcesSelectionModel}
          onSelectionModelChange={onResourceModelChange}
          resources={resources}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Button variant="contained" onClick={submitForm}>
          Agregar
        </Button>
      </Box>
    </Box>
  );
}

CoursesForm.propTypes = {};

export default CoursesForm;

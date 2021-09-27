import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { postResources } from "store/reducers/resourcesReducer";

function ResourcesForm(props) {
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleURLChange = (event) => {
    setUrl(event.target.value);
  };

  const dispatch = useDispatch();

  const submitForm = React.useCallback(() => {
    dispatch(postResources(name, url));
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
          marginTop: "1rem",
        }}
      >
        <Typography marginTop="1rem">URL: </Typography>
        <TextField
          sx={{ width: "10rem" }}
          id="url-input"
          label="URL"
          placeholder="URL"
          variant="standard"
          value={url}
          onChange={handleURLChange}
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

ResourcesForm.propTypes = {};

export default ResourcesForm;

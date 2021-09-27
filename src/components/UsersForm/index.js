import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { postUser } from "store/reducers/usersReducer";

function UsersForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const dispatch = useDispatch();

  const submitForm = React.useCallback(() => {
    dispatch(postUser(name, email));
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
        <Typography marginTop="1rem">Email: </Typography>
        <TextField
          sx={{ width: "10rem" }}
          id="email-input"
          label="Email"
          placeholder="Email"
          variant="standard"
          value={email}
          onChange={handleEmailChange}
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

UsersForm.propTypes = {};

export default UsersForm;

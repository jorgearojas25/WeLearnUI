import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import UsersTable from "components/UsersTable";
import ResourcesTable from "components/ResourcesTable";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "store/reducers/coursesReducer";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ display: "flex", justifyContent: "space-around" }}>
        <TableCell width="10">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell width="80">{row.name}</TableCell>
        <TableCell width="80">{row.founder?.name}</TableCell>
        <TableCell width="80">{row.resources?.length}</TableCell>
        <TableCell width="80">{row.estudiantes?.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Estudiantes
              </Typography>
              <UsersTable users={row.estudiantes} />
              <Typography variant="h6" gutterBottom component="div">
                Recursos
              </Typography>
              <ResourcesTable resources={row.resources} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    founder: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    estudiantes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.coursesReducer);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    dispatch(getCourses());
  }, []);

  React.useEffect(() => {
    setRows(courses);
  }, [courses]);

  if (rows.length > 0) {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={{ display: "flex", justifyContent: "space-around" }}>
              <TableCell width="10">Detail</TableCell>
              <TableCell width="80">Name</TableCell>
              <TableCell width="80">Founder</TableCell>
              <TableCell width="80">Resources</TableCell>
              <TableCell width="80">Students</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return <Typography>Aun no hay cursos creados</Typography>;
}

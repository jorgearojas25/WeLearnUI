import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// @mui material components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Custom Components
import SuiBox from "components/SuiBox";
import SuiInput from "components/SuiInput";
import Breadcrumbs from "examples/Breadcrumbs";
import styles from "components/TopNavbar/styles";
import { useSoftUIController } from "context";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar } = controller;
  const classes = styles({ transparentNavbar, absolute, light, isMini });
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // #region navbar opacity
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    function handleTransparentNavbar() {
      dispatch({
        type: "TRANSPARENT_NAVBAR",
        value: (fixedNavbar && window.scrollY === 0) || !fixedNavbar,
      });
    }

    window.addEventListener("scroll", handleTransparentNavbar);

    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  // #endregion

  const handleMiniSidenav = () => dispatch({ type: "MINI_SIDENAV", value: !miniSidenav });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      className={classes.navbar}
    >
      <Toolbar className={classes.navbar_container}>
        <SuiBox customClass={classes.navbar_row} color="inherit" mb={{ xs: 1, md: 0 }}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </SuiBox>
        {isMini ? null : (
          <SuiBox customClass={classes.navbar_row}>
            <SuiBox pr={1}>
              <SuiInput
                placeholder="Type here..."
                withIcon={{ icon: "search", direction: "left" }}
                customClass={classes.navbar_input}
              />
            </SuiBox>
            <SuiBox
              color={light ? "white" : "inherit"}
              customClass={classes.navbar_section_desktop}
            >
              <IconButton
                size="small"
                color="inherit"
                className={classes.navbar_mobile_menu}
                onClick={handleMiniSidenav}
              >
                <Icon>{miniSidenav ? "menu_open" : "menu"}</Icon>
              </IconButton>
            </SuiBox>
          </SuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;

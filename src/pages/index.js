import { Flex } from "@chakra-ui/layout";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// pages
import Contents from "./Contents";
import Courses from "./Courses";
import Forums from "./Forums";

function AppContainer() {
  return (
    <Flex>
      <Router>
        {/* <Navbar /> */}
        <Flex>
          <Sidebar />
        </Flex>
        <Flex>
          <Switch>
            <Route path="/contents">
              <Contents />
            </Route>
            <Route path="/forums">
              <Forums />
            </Route>
            <Route path="/">
              <Courses />
            </Route>
          </Switch>
        </Flex>
      </Router>
    </Flex>
  );
}

export default AppContainer;

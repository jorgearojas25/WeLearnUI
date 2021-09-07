import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex direction="row">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/forums">About</Link>
        <Link to="/contents">Users</Link>
      </nav>
    </Flex>
  );
}

export default Navbar;

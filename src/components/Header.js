import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Container, Image, Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu fixed="top" style={{ backgroundColor: "darkorange" }}>
      <Container>
        <Menu.Item
          as={NavLink}
          exact
          to="/"
          header
          style={{ padding: "0.2em 1em" }}
        >
          <Image
            src="/newspaper.svg"
            style={{ marginRight: "0.8em", width: 36 }}
            alt="React News App Logo"
          />
          React News App
        </Menu.Item>
        <Menu.Item as={NavLink} to="/new/1">
          New
        </Menu.Item>
        <Menu.Item as={NavLink} to="/top">
          Top
        </Menu.Item>
        <Menu.Item as={NavLink} to="/search">
          Search
        </Menu.Item>
        <Menu.Item as={NavLink} to="/create">
          Submit
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/login">
            Login
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default withRouter(Header);

import React from "react";
import { Button, Container, DarkMode, Wrapper } from "./style";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo className="logo" />
          <Button id="btn">
            <DarkMode /> Dark mode
          </Button>
        </Wrapper>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;

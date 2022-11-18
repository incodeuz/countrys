import React, { useContext } from "react";
import { Button, Container, DarkMode, Wrapper } from "./style";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../context/darkMode";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <>
      <Container dark={dark} id="con">
        <Wrapper dark={dark}>
          <Logo dark={dark} className="logo" />
          <Button dark={dark} onClick={() => setDark(!dark)} id="btn">
            <DarkMode /> Dark mode
          </Button>
        </Wrapper>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;

import React from "react";
import { Button, Container, DarkMode, Wrapper } from "./style";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const darkModeFunc = () => {
    const darkMode = document.querySelectorAll("#dark");
    console.log(darkMode);
    for (let key in darkMode) {
      console.log(darkMode[key].classList.toggle("dark"));
    }
    // darkMode.map((value) => {
    //   // value.classList.toggle("dark");
    //   console.log(value);
    // });
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo className="logo" />
          <Button onClick={() => darkModeFunc()} id="btn">
            <DarkMode /> Dark mode
          </Button>
        </Wrapper>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;

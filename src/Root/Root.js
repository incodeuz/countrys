import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../components/Details";

import Home from "../components/Home";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" index element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;

import { Route, Routes } from "react-router-dom";
import Details from "../components/Details";
import Details2 from "../components/Details2";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" index element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details2/:id" element={<Details2 />} />
          <Route path="/notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Root;

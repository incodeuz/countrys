import React, { useContext } from "react";
import { Box, Wrapper } from "./style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/darkMode";

const Details = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { dark } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: dark ? "var(--darkbgcon)" : "var(--lightbgcon)",
        height: "calc(100vh - 80px)",
      }}
    >
      <Wrapper>
        <p
          style={{
            background: dark ? "var(--darkbg)" : "var(--lightbg)",
            color: dark ? "var(--lightbgcon)" : "var(--darkbgcon)",
          }}
          onClick={() => navigate("/")}
          className="back"
        >
          {"⬅ Back"}
        </p>
        <div
          style={{
            color: dark ? "var(--lightbgcon)" : "var(--darkbgcon)",
          }}
          className="container"
        >
          <img className="img" src={state.flag} alt="" />
          <Box>
            <h1 dark={dark} className="box__title">
              {state.name}
            </h1>
            <div dark={dark} className="box">
              <div dark={dark} className="box__subtitles">
                <p>
                  <strong>Native Name:</strong> {state.nativeName}
                </p>
                <p>
                  <strong>Population:</strong> {state.population}
                </p>
                <p>
                  <strong>Region:</strong> {state.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {state.subregion}
                </p>
              </div>
              <div className="box__subtitles">
                <p>
                  <strong>Top level Domain:</strong> {state.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies:</strong> {state.currencies[0].name}{" "}
                  {state.currencies[0].symbol}
                </p>
                <p>
                  <strong>Languages:</strong> {state.languages[0].name}
                </p>
              </div>
            </div>
            <div className="borders">
              <p>
                <strong>Borders : </strong>
              </p>

              {state.borders.map((val) => {
                return (
                  <Link to={`/details2/:${val}`}>
                    <p
                      style={{
                        color: dark ? "var(--lightbgcon)" : "var(--darkbgcon)",
                        boxShadow: `0 0 1px 2px ${
                          dark ? "var(--lightbgcon)" : "var(--darkbgcon)"
                        }`,
                      }}
                      className="titles"
                    >
                      {val}
                    </p>
                  </Link>
                );
              })}
            </div>
          </Box>
        </div>
      </Wrapper>
    </div>
  );
};

export default Details;

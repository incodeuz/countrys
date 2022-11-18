import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/darkMode";
import { Box, Wrapper } from "./style";

const Details2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [api, setApi] = useState([]);
  const { dark } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all").then((res) =>
      res.json().then((data) => {
        setApi(data);
        setIsLoading(false);
      })
    );
  }, []);
  return (
    <div
      style={{
        background: dark ? "var(--darkbgcon)" : "var(--lightbgcon)",
        height: "calc(100% - 80px)",
      }}
    >
      {isLoading
        ? "Loading..."
        : api.map(
            (value) =>
              value.alpha3Code === id.slice(1) && (
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
                    <img className="img" src={value.flag} alt="" />
                    <Box>
                      <h1 dark={dark} className="box__title">
                        {value.name}
                      </h1>
                      <div dark={dark} className="box">
                        <div dark={dark} className="box__subtitles">
                          <p>
                            <strong>Native Name:</strong> {value.nativeName}
                          </p>
                          <p>
                            <strong>Population:</strong> {value.population}
                          </p>
                          <p>
                            <strong>Region:</strong> {value.region}
                          </p>
                          <p>
                            <strong>Sub Region:</strong> {value.subregion}
                          </p>
                        </div>
                        <div className="box__subtitles">
                          <p>
                            <strong>Top level Domain:</strong>{" "}
                            {value.topLevelDomain}
                          </p>
                          <p>
                            <strong>Currencies:</strong>{" "}
                            {value.currencies[0].name}{" "}
                            {value.currencies[0].symbol}
                          </p>
                          <p>
                            <strong>Languages:</strong>{" "}
                            {value.languages[0].name}
                          </p>
                        </div>
                      </div>
                      <div className="borders">
                        <p>
                          <strong>Borders : </strong>
                        </p>

                        {value.borders.map((val) => {
                          return (
                            <Link to={`/details2/:${val}`}>
                              <p
                                style={{
                                  color: dark
                                    ? "var(--lightbgcon)"
                                    : "var(--darkbgcon)",
                                  boxShadow: `0 0 1px 2px ${
                                    dark
                                      ? "var(--lightbgcon)"
                                      : "var(--darkbgcon)"
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
              )
          )}
    </div>
  );
};

export default Details2;

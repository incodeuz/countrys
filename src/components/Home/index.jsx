import React, { useContext, useEffect, useState } from "react";
import { WrapperCon } from "./style";
import { InputBox, Wrapper } from "./style";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";
import CountryDetails from "../Country/index";
import { ThemeContext } from "../../context/darkMode";

const Home = () => {
  const { dark } = useContext(ThemeContext);
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all").then((res) =>
      res.json().then((data) => {
        setApi(data);
        setIsLoading(false);
      })
    );
  }, []);

  const searchCountrys = (term) => {
    const newData = api.filter((val) =>
      val.name.toLowerCase().includes(term.toLowerCase())
    );
    setApi(newData);
  };

  const filterByRegion = async (val) => {
    if (val !== "") {
      const newData = api.filter(
        (value) => value.region.toLowerCase() === val.toLowerCase()
      );
      setApi(newData);
    }
    if (val === "all") {
      fetch("https://restcountries.com/v2/all").then((res) =>
        res.json().then((data) => {
          setApi(data);
        })
      );
    }
  };

  return (
    <div
      style={{
        paddingTop: "50px",
        background: dark ? "var(--darkbgcon)" : "var(--lightbgcon)",
      }}
    >
      <Wrapper dark={dark}>
        <InputBox dark={dark}>
          <SearchIcon id="dark" />
          <input
            onChange={(term) => searchCountrys(term.target.value)}
            type="text"
            placeholder="Search for a country…"
          />
        </InputBox>
        <select onChange={(val) => filterByRegion(val.target.value)}>
          <option hidden value="">
            Filter by Region
          </option>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </Wrapper>
      <WrapperCon>
        {isLoading
          ? "Loading..."
          : api?.map((country, index) => (
              <Link className="link" to="details" state={country} key={index}>
                <CountryDetails
                  id="dark"
                  title={country.name}
                  image_url={country.flag}
                  population={country.population}
                  region={country.region}
                  capital={country.capital} 
                />
              </Link>
            ))}
      </WrapperCon>
    </div>
  );
};

export default Home;

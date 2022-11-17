import React, { useEffect, useState } from "react";
import { WrapperCon } from "./style";
import { InputBox, Wrapper } from "./style";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { Link, useNavigate } from "react-router-dom";
import CountryDetails from "../Country/index";

const Home = () => {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://restcountries.com/v2/all").then((res) =>
      res.json().then((data) => {
        setApi(data);
        setIsLoading(false);
      })
    );
  }, []);
  console.log("====================================");
  console.log([...api.map((val) => val.name)]);
  console.log("====================================");
  const searchCountrys = async (term) => {
    try {
      // if (term.length < 0 || term === "") return;
      if (
        api.map((val) => val.name.toLowerCase().includes(term.toLowerCase()))
      ) {
        const res = await fetch(`https://restcountries.com/v2/name/${term}`);
        const data = await res.json();
        await setApi(data);
      } else {
        navigate("/notfound");
      }
    } catch (err) {
      navigate("/notfound");
    }
    // if ([...api.map((val) => val.name)].includes(term) || term === "") {
    //   navigate("/notfound");
    // }
  };
  const filterByRegion = async (val) => {
    if (val !== "") {
      const res = await fetch(`https://restcountries.com/v2/region/${val}`);
      const data = await res.json();
      await setApi(data);
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
    <>
      <Wrapper>
        <InputBox>
          <SearchIcon />
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
                  title={country.name}
                  image_url={country.flag}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            ))}
      </WrapperCon>
    </>
  );
};

export default Home;

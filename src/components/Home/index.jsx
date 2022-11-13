import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";

const Home = () => {
  const [api, setApi] = useState();
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
    <Wrapper>
      {isLoading
        ? "Loading..."
        : api?.map((value) => {
            return (
              <div style={{border: '1px solid red'}}  >
                <p>{value.name}</p>
                <p>{value.capital}</p>
                <p>{value.borders}</p>
                <img width="100" src={value.flag} alt="" />
              </div>
            );
          })}
    </Wrapper>
  );
};

export default Home;

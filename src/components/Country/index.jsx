import React, { useContext } from "react";
import { ThemeContext } from "../../context/darkMode";
import { Boxes, Cart, Image } from "./style";

const CountryDetails = ({ title, image_url, population, region, capital }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <Cart dark={dark}>
      <Image className="image" src={image_url} alt={title} />
      <Boxes dark={dark}>
        <Boxes.Title>{title}</Boxes.Title>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </Boxes>
    </Cart>
  );
};

export default CountryDetails;

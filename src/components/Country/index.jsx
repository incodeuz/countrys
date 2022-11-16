import React from "react";
import { Boxes, Cart, Image } from "./style";

const CountryDetails = ({ title, image_url, population, region, capital }) => {
  return (
    <Cart>
      <Image src={image_url} alt={title} />
      <Boxes>
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

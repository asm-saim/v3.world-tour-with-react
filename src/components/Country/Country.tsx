import type { CountryType } from "../../types";
import "./Country.css";
import { useState } from "react";

export type CountryProps = {
  country: CountryType;
};
export default function Country({ country }: CountryProps) {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? "country-bg" : ""}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Common Name: {country.name.common}</h3>
      <h5>Official Name: {country.name.official}</h5>
      <h5>Capital: {country.capital.capital}</h5>
      <h5>Population: {country.population.population}</h5>
      <button onClick={handleVisited}>{visited ? "Visited" : "Mark as Visited"}</button>
    </div>
  );
}

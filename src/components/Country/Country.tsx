import type { CountryType } from "../../types";
import "./Country.css";
import { useState } from "react";

export type CountryProps = {
  country: CountryType;
  handleVisited: (country: CountryType) => void;
};
export default function Country({ country, handleVisited }: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);
  const handleVisitedCountry = () => {
    setVisited(!visited);
    handleVisited(country);
  };
  return (
    <div className={`country ${visited ? "country-bg" : ""}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Common Name: {country.name.common}</h3>
      <h5>Official Name: {country.name.official}</h5>
      <h5>Capital: {country.capital.capital}</h5>
      <h5>Population: {country.population.population}</h5>
      <button onClick={handleVisitedCountry}>{visited ? "Visited" : "Mark as Visited"}</button>
    </div>
  );
}

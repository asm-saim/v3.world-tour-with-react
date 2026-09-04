import type { CountryType } from "../../types";
import "./Country.css";

export type CountryProps = {
  country: CountryType;
};
export default function Country({ country }: CountryProps) {
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Common Name: {country.name.common}</h3>
      <h4>Official Name: {country.name.official}</h4>
      <h4>Capital: {country.capital.capital}</h4>
      <h4>Population: {country.population.population}</h4>
    </div>
  );
}

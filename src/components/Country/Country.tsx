import type { CountryType } from "../../types";
import "./Country.css";

export type CountryProps = {
  country: CountryType;
};
export default function Country({ country }: CountryProps) {
  return (
    <div className="country">
      <h3>Common Name: {country.name.common}</h3>
      <h3>Official Name: {country.name.official}</h3>
    </div>
  );
}

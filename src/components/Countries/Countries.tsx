import { use } from "react";
import type { CountryType } from "../../types";
import Country from "../Country/Country";

export type CountriesProps = {
  countriesPromise: Promise<CountryType[]>;
};

export default function Countries({ countriesPromise }: CountriesProps) {
  const countries = use(countriesPromise);
  console.log(countries);
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
}

import { use, useState } from "react";
import type { CountryType } from "../../types";
import Country from "../Country/Country";
import "./Countries.css";

export type CountriesProps = {
  countriesPromise: Promise<CountryType[]>;
};

export default function Countries({ countriesPromise }: CountriesProps) {
  const countries = use(countriesPromise);
  console.log(countries);

  // State to keep track of visited countries
  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

  // State to keep track of visited flags
  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  // Function to handle marking a country as visited
  const handleVisited = (country: CountryType) => {
    const visited = [...visitedCountries, country];
    setVisitedCountries(visited);
  };

  // Function to handle marking a flag as visited
  const handleFlags = (flags: string): void => {
    if (visitedFlags.includes(flags)) {
      // return; // Flag already marked as visited, do nothing
      const updatedVisitedFlags = visitedFlags.filter((flag) => flag !== flags);
      setVisitedFlags(updatedVisitedFlags);
    } else {
      const markVisitedFlags = [...visitedFlags, flags];
      setVisitedFlags(markVisitedFlags);
    }
  };

  return (
    <>
      <h2>Countries: {countries.length}</h2>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <h3>Visited Flags: {visitedFlags.length}</h3>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisited={handleVisited}
            handleFlags={handleFlags}
          ></Country>
        ))}
      </div>
    </>
  );
}

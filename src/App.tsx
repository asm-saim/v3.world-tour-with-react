import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import type { CountryType } from "./types";

// step 1: create a promise function to fetch data from the API
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <h2>World Tour On the Go...</h2>
      <Suspense fallback="Loading...">
        <Countries countriesPromise={countriesPromise()} />
      </Suspense>
    </>
  );
}

export default App;

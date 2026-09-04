import { use } from "react";
import type { CountryType } from "../types";

export type CountriesProps = {
  countriPromise: Promise<CountryType[]>;
};

export default function Countries({ countriPromise }: CountriesProps) {
  const countries = use(countriPromise);
  return (
    <div>
      <h2>Countries</h2>
    </div>
  );
}

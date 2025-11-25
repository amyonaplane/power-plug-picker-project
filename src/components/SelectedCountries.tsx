import React from "react";
import { Country } from "../data/countryData";

interface SelectedCountriesProps {
  selectedCountries: Country[];
  onRemoveCountry: (countryName: string) => void;
}

export const SelectedCountries: React.FC<SelectedCountriesProps> = ({
  selectedCountries,
  onRemoveCountry,
}) => {
  if (selectedCountries.length === 0) {
    return null;
  }

  return (
    <div className="selected-countries">
      <h3>Selected Countries:</h3>
      <div className="country-tags">
        {selectedCountries.map((country) => (
          <span key={country.name} className="country-tag">
            {country.name}
            <button
              className="remove-btn"
              onClick={() => onRemoveCountry(country.name)}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

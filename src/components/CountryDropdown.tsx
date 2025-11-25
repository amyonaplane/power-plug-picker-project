import React, { useEffect, useRef } from "react";
import { Country } from "../data/countryData";

interface CountryDropdownProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  filteredCountries: Country[];
  selectedCountries: Country[];
  onCountryToggle: (country: Country) => void;
}

export const CountryDropdown: React.FC<CountryDropdownProps> = ({
  searchTerm,
  setSearchTerm,
  isDropdownOpen,
  setIsDropdownOpen,
  filteredCountries,
  selectedCountries,
  onCountryToggle,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsDropdownOpen]);

  const isCountrySelected = (country: Country) => {
    return selectedCountries.some((c) => c.name === country.name);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search countries by name or code (e.g., US, GB)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsDropdownOpen(true)}
          className="search-input"
        />
        <button
          className="dropdown-toggle"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          ▼
        </button>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <div
                key={country.name}
                className={`dropdown-item ${
                  isCountrySelected(country) ? "selected" : ""
                }`}
                onClick={() => onCountryToggle(country)}
              >
                <input
                  type="checkbox"
                  checked={isCountrySelected(country)}
                  onChange={() => {}}
                  className="checkbox"
                />
                <span className="country-name">
                  {country.name}{" "}
                  <span className="country-code">({country.code})</span>
                </span>
                <span className="plug-types">
                  {country.plugTypes.join(", ")}
                </span>
              </div>
            ))
          ) : (
            <div className="dropdown-item no-results">No countries found</div>
          )}
        </div>
      )}
    </div>
  );
};

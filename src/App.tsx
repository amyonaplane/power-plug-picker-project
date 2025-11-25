import React, { useState, useMemo } from "react";
import "./App.css";
import { countries, Country, simplifyPlugTypes } from "./data/countryData";
import { CountryDropdown } from "./components/CountryDropdown";
import { SelectedCountries } from "./components/SelectedCountries";
import { PlugResults } from "./components/PlugResults";
import { EmptyState } from "./components/EmptyState";

function App() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        country.name.toLowerCase().includes(searchLower) ||
        country.code.toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm]);

  const uniquePlugTypes = useMemo(() => {
    const allPlugs = selectedCountries.flatMap((country) => country.plugTypes);
    const unique = Array.from(new Set(allPlugs)).sort();
    return simplifyPlugTypes(unique);
  }, [selectedCountries]);

  const handleCountryToggle = (country: Country) => {
    setSelectedCountries((prev) => {
      const isSelected = prev.some((c) => c.name === country.name);
      if (isSelected) {
        return prev.filter((c) => c.name !== country.name);
      } else {
        return [...prev, country];
      }
    });
  };

  const removeCountry = (countryName: string) => {
    setSelectedCountries((prev) => prev.filter((c) => c.name !== countryName));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🔌 Power Plug Picker</h1>
        <p className="subtitle">
          Select countries to see their power plug types
        </p>

        <CountryDropdown
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          filteredCountries={filteredCountries}
          selectedCountries={selectedCountries}
          onCountryToggle={handleCountryToggle}
        />

        <SelectedCountries
          selectedCountries={selectedCountries}
          onRemoveCountry={removeCountry}
        />

        <PlugResults uniquePlugTypes={uniquePlugTypes} />

        <EmptyState hasSelectedCountries={selectedCountries.length > 0} />
      </div>
    </div>
  );
}

export default App;

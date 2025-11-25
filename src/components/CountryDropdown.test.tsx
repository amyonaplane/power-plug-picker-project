import { render, screen, fireEvent } from "@testing-library/react";
import { CountryDropdown } from "./CountryDropdown";
import { Country } from "../data/countryData";

const mockCountries: Country[] = [
  { name: "United States", plugTypes: ["A", "B"] },
  { name: "United Kingdom", plugTypes: ["G"] },
  { name: "Germany", plugTypes: ["C", "F"] },
];

describe("CountryDropdown", () => {
  const defaultProps = {
    searchTerm: "",
    setSearchTerm: jest.fn(),
    isDropdownOpen: false,
    setIsDropdownOpen: jest.fn(),
    filteredCountries: mockCountries,
    selectedCountries: [],
    onCountryToggle: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("should render search input", () => {
      render(<CountryDropdown {...defaultProps} />);
      const input = screen.getByPlaceholderText("Search countries...");
      expect(input).toBeInTheDocument();
    });

    it("should render dropdown toggle button", () => {
      render(<CountryDropdown {...defaultProps} />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("▼");
    });

    it("should display plug types for each country", () => {
      render(<CountryDropdown {...defaultProps} isDropdownOpen={true} />);
      expect(screen.getByText("A, B")).toBeInTheDocument();
      expect(screen.getByText("G")).toBeInTheDocument();
      expect(screen.getByText("C, F")).toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    it("should not display dropdown menu when isDropdownOpen is false", () => {
      render(<CountryDropdown {...defaultProps} />);
      const dropdown = screen.queryByText("United States");
      expect(dropdown).not.toBeInTheDocument();
    });

    it("should display dropdown menu when isDropdownOpen is true", () => {
      render(<CountryDropdown {...defaultProps} isDropdownOpen={true} />);
      expect(screen.getByText("United States")).toBeInTheDocument();
      expect(screen.getByText("United Kingdom")).toBeInTheDocument();
      expect(screen.getByText("Germany")).toBeInTheDocument();
    });

    it("should show selected state for selected countries", () => {
      const selectedCountries = [mockCountries[0]];
      render(
        <CountryDropdown
          {...defaultProps}
          isDropdownOpen={true}
          selectedCountries={selectedCountries}
        />
      );
      const checkbox = screen.getAllByRole("checkbox")[0];
      expect(checkbox).toBeChecked();
    });

    it("should show unselected state for unselected countries", () => {
      render(<CountryDropdown {...defaultProps} isDropdownOpen={true} />);
      const checkboxes = screen.getAllByRole("checkbox");
      checkboxes.forEach((checkbox) => {
        expect(checkbox).not.toBeChecked();
      });
    });

    it("should display 'No countries found' when filteredCountries is empty", () => {
      render(
        <CountryDropdown
          {...defaultProps}
          isDropdownOpen={true}
          filteredCountries={[]}
        />
      );
      expect(screen.getByText("No countries found")).toBeInTheDocument();
    });

    it("should call setSearchTerm when typing in search input", () => {
      render(<CountryDropdown {...defaultProps} />);
      const input = screen.getByPlaceholderText("Search countries...");
      fireEvent.change(input, { target: { value: "United" } });
      expect(defaultProps.setSearchTerm).toHaveBeenCalledWith("United");
    });

    it("should call setIsDropdownOpen when clicking toggle button", () => {
      render(<CountryDropdown {...defaultProps} />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(defaultProps.setIsDropdownOpen).toHaveBeenCalledWith(true);
    });

    it("should call setIsDropdownOpen when focusing on search input", () => {
      render(<CountryDropdown {...defaultProps} />);
      const input = screen.getByPlaceholderText("Search countries...");
      fireEvent.focus(input);
      expect(defaultProps.setIsDropdownOpen).toHaveBeenCalledWith(true);
    });

    it("should call onCountryToggle when clicking a country", () => {
      render(<CountryDropdown {...defaultProps} isDropdownOpen={true} />);
      const country = screen.getByText("United States");
      fireEvent.click(country);
      expect(defaultProps.onCountryToggle).toHaveBeenCalledWith(
        mockCountries[0]
      );
    });

    it("should close dropdown when clicking outside", () => {
      render(<CountryDropdown {...defaultProps} isDropdownOpen={true} />);
      fireEvent.mouseDown(document.body);
      expect(defaultProps.setIsDropdownOpen).toHaveBeenCalledWith(false);
    });
  });
});

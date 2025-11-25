import { render, screen, fireEvent } from "@testing-library/react";
import { SelectedCountries } from "./SelectedCountries";
import { Country } from "../data/countryData";

const mockCountries: Country[] = [
  { name: "United States", plugTypes: ["A", "B"] },
  { name: "United Kingdom", plugTypes: ["G"] },
  { name: "Germany", plugTypes: ["C", "F"] },
];

describe("SelectedCountries", () => {
  const mockOnRemoveCountry = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("should render nothing when no countries are selected", () => {
      const { container } = render(
        <SelectedCountries
          selectedCountries={[]}
          onRemoveCountry={mockOnRemoveCountry}
        />
      );
      expect(container).toBeEmptyDOMElement();
    });

    it("should render selected countries heading", () => {
      render(
        <SelectedCountries
          selectedCountries={mockCountries}
          onRemoveCountry={mockOnRemoveCountry}
        />
      );
      expect(screen.getByText("Selected Countries:")).toBeInTheDocument();
    });

    it("should render all selected country tags", () => {
      render(
        <SelectedCountries
          selectedCountries={mockCountries}
          onRemoveCountry={mockOnRemoveCountry}
        />
      );
      expect(screen.getByText("United States")).toBeInTheDocument();
      expect(screen.getByText("United Kingdom")).toBeInTheDocument();
      expect(screen.getByText("Germany")).toBeInTheDocument();
    });

    it("should render remove buttons for each country", () => {
      render(
        <SelectedCountries
          selectedCountries={mockCountries}
          onRemoveCountry={mockOnRemoveCountry}
        />
      );
      const removeButtons = screen.getAllByRole("button");
      expect(removeButtons).toHaveLength(mockCountries.length);
    });

    it("should render correct number of country tags", () => {
      render(
        <SelectedCountries
          selectedCountries={[mockCountries[0]]}
          onRemoveCountry={mockOnRemoveCountry}
        />
      );
      const countryTags = screen.getAllByText(/United States/);
      expect(countryTags).toHaveLength(1);
    });
  });

  describe("Functionality", () => {
    it("should call onRemoveCountry with correct country name when remove button is clicked", () => {
      render(
        <SelectedCountries
          selectedCountries={mockCountries}
          onRemoveCountry={mockOnRemoveCountry}
        />
      );
      const removeButtons = screen.getAllByRole("button");
      fireEvent.click(removeButtons[0]);
      expect(mockOnRemoveCountry).toHaveBeenCalledWith("United States");
    });
  });
});

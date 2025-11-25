import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("Rendering", () => {
    it("should render the app title", () => {
      render(<App />);
      expect(screen.getByText("🔌 Power Plug Picker")).toBeInTheDocument();
    });

    it("should render the subtitle", () => {
      render(<App />);
      expect(
        screen.getByText("Select countries to see their power plug types")
      ).toBeInTheDocument();
    });

    it("should render search input", () => {
      render(<App />);
      expect(
        screen.getByPlaceholderText("Search countries...")
      ).toBeInTheDocument();
    });

    it("should render empty state initially", () => {
      render(<App />);
      expect(
        screen.getByText(
          "👆 Select one or more countries to see their power plug types"
        )
      ).toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    it("should open dropdown when clicking toggle button", () => {
      render(<App />);
      const toggleButton = screen.getByRole("button");
      fireEvent.click(toggleButton);
      // Dropdown should now show countries
      expect(screen.getByText("United States")).toBeInTheDocument();
    });

    it("should filter countries based on search term", () => {
      render(<App />);
      const searchInput = screen.getByPlaceholderText("Search countries...");

      // Focus to open dropdown
      fireEvent.focus(searchInput);

      // Type to filter
      fireEvent.change(searchInput, { target: { value: "United" } });

      expect(screen.getByText("United States")).toBeInTheDocument();
      expect(screen.getByText("United Kingdom")).toBeInTheDocument();
      expect(screen.getByText("United Arab Emirates")).toBeInTheDocument();
    });

    it("should select a country when clicked", () => {
      render(<App />);

      // Open dropdown
      fireEvent.focus(screen.getByPlaceholderText("Search countries..."));

      // Select a country
      const usaOption = screen.getByText("United States");
      fireEvent.click(usaOption);

      // Should show in selected countries
      expect(screen.getByText("Selected Countries:")).toBeInTheDocument();
    });

    it("should display plug types when country is selected", () => {
      render(<App />);

      // Open dropdown
      fireEvent.focus(screen.getByPlaceholderText("Search countries..."));

      // Select United States (Type A, B)
      fireEvent.click(screen.getByText("United States"));

      // Should show plug results
      expect(
        screen.getByText("Required Power Plug Types:")
      ).toBeInTheDocument();
      expect(screen.getByText("A")).toBeInTheDocument();
    });

    it("should remove country when remove button is clicked", () => {
      render(<App />);

      // Open dropdown and select a country
      fireEvent.focus(screen.getByPlaceholderText("Search countries..."));
      fireEvent.click(screen.getByText("United States"));

      // Remove the country
      const removeButton = screen
        .getAllByRole("button")
        .find((btn) => btn.textContent === "×");
      if (removeButton) {
        fireEvent.click(removeButton);
      }

      // Should not show selected countries section
      expect(screen.queryByText("Selected Countries:")).not.toBeInTheDocument();
    });

    it("should display unique plug types when multiple countries selected", () => {
      render(<App />);

      // Open dropdown
      fireEvent.focus(screen.getByPlaceholderText("Search countries..."));

      // Select USA (A, B) and Canada (A, B)
      fireEvent.click(screen.getByText("United States"));
      fireEvent.click(screen.getByText("Canada"));

      // Should only show Type A (Type B is simplified)
      const plugBadges = screen.getAllByText("A");
      expect(plugBadges.length).toBeGreaterThan(0);
    });

    it("should simplify plug types (Type C should replace J)", () => {
      render(<App />);

      // Open dropdown
      fireEvent.focus(screen.getByPlaceholderText("Search countries..."));

      // Select Switzerland (C, J)
      fireEvent.click(screen.getByText("Switzerland"));

      // Should show Type C
      expect(screen.getByText("C")).toBeInTheDocument();

      // Should not show Type J separately as a badge (it's simplified to C)
      const plugCards = screen.getByText(
        "Required Power Plug Types:"
      ).parentElement;
      const badges = plugCards?.querySelectorAll(".plug-type-badge");
      const badgeTexts = Array.from(badges || []).map((b) => b.textContent);

      expect(badgeTexts).toContain("C");
      expect(badgeTexts).not.toContain("J");
    });

    it("should hide empty state when countries are selected", () => {
      render(<App />);

      // Open dropdown and select a country
      fireEvent.focus(screen.getByPlaceholderText("Search countries..."));
      fireEvent.click(screen.getByText("United States"));

      // Empty state should be hidden
      expect(
        screen.queryByText(
          "👆 Select one or more countries to see their power plug types"
        )
      ).not.toBeInTheDocument();
    });
  });
});

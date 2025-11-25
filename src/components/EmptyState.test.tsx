import { render, screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("should render empty state message when no countries are selected", () => {
    render(<EmptyState hasSelectedCountries={false} />);
    expect(
      screen.getByText(
        "👆 Select one or more countries to see their power plug types"
      )
    ).toBeInTheDocument();
  });

  it("should render nothing when countries are selected", () => {
    const { container } = render(<EmptyState hasSelectedCountries={true} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should have proper CSS class", () => {
    const { container } = render(<EmptyState hasSelectedCountries={false} />);
    expect(container.querySelector(".empty-state")).toBeInTheDocument();
  });

  it("should render paragraph element", () => {
    render(<EmptyState hasSelectedCountries={false} />);
    const paragraph = screen.getByText(/Select one or more countries/);
    expect(paragraph.tagName).toBe("P");
  });
});

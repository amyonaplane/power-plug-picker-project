import { render, screen } from "@testing-library/react";
import { PlugResults } from "./PlugResults";

describe("PlugResults", () => {
  describe("Rendering", () => {
    it("should render nothing when no plug types are provided", () => {
      const { container } = render(<PlugResults uniquePlugTypes={[]} />);
      expect(container).toBeEmptyDOMElement();
    });

    it("should render heading when plug types are provided", () => {
      render(<PlugResults uniquePlugTypes={["A", "C"]} />);
      expect(
        screen.getByText("Required Power Plug Types:")
      ).toBeInTheDocument();
    });

    it("should render plug type badges", () => {
      render(<PlugResults uniquePlugTypes={["A", "B", "C"]} />);
      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
      expect(screen.getByText("C")).toBeInTheDocument();
    });

    it("should render plug descriptions", () => {
      render(<PlugResults uniquePlugTypes={["A", "G"]} />);
      expect(
        screen.getByText(/Type A - North American 2-pin/)
      ).toBeInTheDocument();
      expect(screen.getByText(/Type G - British 3-pin/)).toBeInTheDocument();
    });

    it("should render correct number of plug cards", () => {
      const { container } = render(
        <PlugResults uniquePlugTypes={["A", "B", "C", "G"]} />
      );
      const plugCards = container.querySelectorAll(".plug-card");
      expect(plugCards).toHaveLength(4);
    });

    it("should render plug type badge for each plug", () => {
      const { container } = render(
        <PlugResults uniquePlugTypes={["C", "F"]} />
      );
      const badges = container.querySelectorAll(".plug-type-badge");
      expect(badges).toHaveLength(2);
    });

    it("should render plug description for each plug", () => {
      const { container } = render(
        <PlugResults uniquePlugTypes={["C", "F"]} />
      );
      const descriptions = container.querySelectorAll(".plug-description");
      expect(descriptions).toHaveLength(2);
    });

    it("should render all plug types from A to N", () => {
      const allPlugs = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
      ];
      render(<PlugResults uniquePlugTypes={allPlugs} />);
      allPlugs.forEach((plug) => {
        expect(screen.getByText(plug)).toBeInTheDocument();
      });
    });
  });

  describe("Functionality", () => {
    it("should handle single plug type", () => {
      render(<PlugResults uniquePlugTypes={["I"]} />);
      expect(screen.getByText("I")).toBeInTheDocument();
      expect(screen.getByText(/Type I - Australian 3-pin/)).toBeInTheDocument();
    });

    it("should handle multiple plug types", () => {
      render(<PlugResults uniquePlugTypes={["A", "C", "G"]} />);
      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("C")).toBeInTheDocument();
      expect(screen.getByText("G")).toBeInTheDocument();
      expect(
        screen.getByText(/Type A - North American 2-pin/)
      ).toBeInTheDocument();
      expect(screen.getByText(/Type C - European 2-pin/)).toBeInTheDocument();
      expect(screen.getByText(/Type G - British 3-pin/)).toBeInTheDocument();
    });
  });
});

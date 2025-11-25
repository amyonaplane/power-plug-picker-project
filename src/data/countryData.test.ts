import {
  countries,
  plugDescriptions,
  getCompatiblePlugs,
  simplifyPlugTypes,
} from "./countryData";

describe("countryData", () => {
  describe("countries", () => {
    it("should have a non-empty list of countries", () => {
      expect(countries.length).toBeGreaterThan(0);
    });

    it("should have valid country structure", () => {
      countries.forEach((country) => {
        expect(country).toHaveProperty("name");
        expect(country).toHaveProperty("plugTypes");
        expect(typeof country.name).toBe("string");
        expect(Array.isArray(country.plugTypes)).toBe(true);
        expect(country.plugTypes.length).toBeGreaterThan(0);
      });
    });

    it("should have unique country names", () => {
      const names = countries.map((c) => c.name);
      const uniqueNames = new Set(names);
      expect(names.length).toBe(uniqueNames.size);
    });
  });

  describe("plugDescriptions", () => {
    it("should have descriptions for all plug types A-N", () => {
      const expectedTypes = [
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
      expectedTypes.forEach((type) => {
        expect(plugDescriptions).toHaveProperty(type);
        expect(typeof plugDescriptions[type]).toBe("string");
      });
    });
  });

  describe("getCompatiblePlugs", () => {
    it("should return at least the plug type itself", () => {
      const result = getCompatiblePlugs("A");
      expect(result).toContain("A");
    });

    it("should return Type A and B for Type B socket", () => {
      const result = getCompatiblePlugs("B");
      expect(result).toContain("A");
      expect(result).toContain("B");
    });

    it("should return Type C and E for Type E socket", () => {
      const result = getCompatiblePlugs("E");
      expect(result).toContain("C");
      expect(result).toContain("E");
    });

    it("should return Type C and J for Type J socket", () => {
      const result = getCompatiblePlugs("J");
      expect(result).toContain("C");
      expect(result).toContain("J");
    });

    it("should return Type D and M for Type M socket", () => {
      const result = getCompatiblePlugs("M");
      expect(result).toContain("D");
      expect(result).toContain("M");
    });

    it("should return Type C with all compatible sockets", () => {
      const result = getCompatiblePlugs("C");
      expect(result).toContain("C");
      expect(result).toContain("E");
      expect(result).toContain("F");
      expect(result).toContain("J");
      expect(result).toContain("K");
      expect(result).toContain("L");
      expect(result).toContain("N");
    });
  });

  describe("simplifyPlugTypes", () => {
    it("should keep Type C and remove J when both are present", () => {
      const result = simplifyPlugTypes(["C", "J"]);
      expect(result).toContain("C");
      expect(result).not.toContain("J");
    });

    it("should keep Type C and remove E, F, J, K, L, N when C is present", () => {
      const result = simplifyPlugTypes(["C", "E", "F", "J", "K", "L", "N"]);
      expect(result).toEqual(["C"]);
    });

    it("should keep Type A and remove B when both are present", () => {
      const result = simplifyPlugTypes(["A", "B"]);
      expect(result).toContain("A");
      expect(result).not.toContain("B");
    });

    it("should keep Type D and remove M when both are present", () => {
      const result = simplifyPlugTypes(["D", "M"]);
      expect(result).toContain("D");
      expect(result).not.toContain("M");
    });

    it("should keep both C and G as they are not compatible", () => {
      const result = simplifyPlugTypes(["C", "G"]);
      expect(result).toContain("C");
      expect(result).toContain("G");
    });

    it("should keep only incompatible types", () => {
      const result = simplifyPlugTypes(["A", "C", "G", "I"]);
      expect(result).toEqual(["A", "C", "G", "I"]);
    });

    it("should return empty array for empty input", () => {
      const result = simplifyPlugTypes([]);
      expect(result).toEqual([]);
    });

    it("should handle complex scenario with multiple compatible types", () => {
      const result = simplifyPlugTypes(["A", "B", "C", "F", "D", "M", "G"]);
      expect(result).toEqual(["A", "C", "D", "G"]);
    });

    it("should maintain alphabetical order", () => {
      const result = simplifyPlugTypes(["G", "A", "C"]);
      expect(result).toEqual(["A", "C", "G"]);
    });
  });
});

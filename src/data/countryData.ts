export interface Country {
  name: string;
  code: string;
  plugTypes: string[];
}

export const countries: Country[] = [
  { name: "Afghanistan", code: "AF", plugTypes: ["C", "F"] },
  { name: "Albania", code: "AL", plugTypes: ["C", "F"] },
  { name: "Algeria", code: "DZ", plugTypes: ["C", "F"] },
  { name: "Argentina", code: "AR", plugTypes: ["C", "I"] },
  { name: "Australia", code: "AU", plugTypes: ["I"] },
  { name: "Austria", code: "AT", plugTypes: ["C", "F"] },
  { name: "Bahamas", code: "BS", plugTypes: ["A", "B"] },
  { name: "Bangladesh", code: "BD", plugTypes: ["C", "D", "G", "K"] },
  { name: "Belgium", code: "BE", plugTypes: ["C", "E"] },
  { name: "Brazil", code: "BR", plugTypes: ["C", "N"] },
  { name: "Bulgaria", code: "BG", plugTypes: ["C", "F"] },
  { name: "Canada", code: "CA", plugTypes: ["A", "B"] },
  { name: "Chile", code: "CL", plugTypes: ["C", "L"] },
  { name: "China", code: "CN", plugTypes: ["A", "C", "I"] },
  { name: "Colombia", code: "CO", plugTypes: ["A", "B"] },
  { name: "Costa Rica", code: "CR", plugTypes: ["A", "B"] },
  { name: "Croatia", code: "HR", plugTypes: ["C", "F"] },
  { name: "Cuba", code: "CU", plugTypes: ["A", "B", "C", "F"] },
  { name: "Cyprus", code: "CY", plugTypes: ["G"] },
  { name: "Czech Republic", code: "CZ", plugTypes: ["C", "E"] },
  { name: "Denmark", code: "DK", plugTypes: ["C", "E", "F", "K"] },
  { name: "Dominican Republic", code: "DO", plugTypes: ["A", "B"] },
  { name: "Ecuador", code: "EC", plugTypes: ["A", "B"] },
  { name: "Egypt", code: "EG", plugTypes: ["C", "F"] },
  { name: "Estonia", code: "EE", plugTypes: ["C", "F"] },
  { name: "Ethiopia", code: "ET", plugTypes: ["C", "E", "F", "L"] },
  { name: "Finland", code: "FI", plugTypes: ["C", "F"] },
  { name: "France", code: "FR", plugTypes: ["C", "E"] },
  { name: "Germany", code: "DE", plugTypes: ["C", "F"] },
  { name: "Ghana", code: "GH", plugTypes: ["D", "G"] },
  { name: "Greece", code: "GR", plugTypes: ["C", "F"] },
  { name: "Hong Kong", code: "HK", plugTypes: ["D", "G"] },
  { name: "Hungary", code: "HU", plugTypes: ["C", "F"] },
  { name: "Iceland", code: "IS", plugTypes: ["C", "F"] },
  { name: "India", code: "IN", plugTypes: ["C", "D", "M"] },
  { name: "Indonesia", code: "ID", plugTypes: ["C", "F"] },
  { name: "Iran", code: "IR", plugTypes: ["C", "F"] },
  { name: "Iraq", code: "IQ", plugTypes: ["C", "D", "G"] },
  { name: "Ireland", code: "IE", plugTypes: ["G"] },
  { name: "Israel", code: "IL", plugTypes: ["C", "H", "M"] },
  { name: "Italy", code: "IT", plugTypes: ["C", "F", "L"] },
  { name: "Jamaica", code: "JM", plugTypes: ["A", "B"] },
  { name: "Japan", code: "JP", plugTypes: ["A", "B"] },
  { name: "Jordan", code: "JO", plugTypes: ["B", "C", "D", "F", "G", "J"] },
  { name: "Kenya", code: "KE", plugTypes: ["G"] },
  { name: "Kuwait", code: "KW", plugTypes: ["C", "G"] },
  { name: "Latvia", code: "LV", plugTypes: ["C", "F"] },
  { name: "Lebanon", code: "LB", plugTypes: ["A", "B", "C", "D", "G"] },
  { name: "Lithuania", code: "LT", plugTypes: ["C", "F"] },
  { name: "Luxembourg", code: "LU", plugTypes: ["C", "F"] },
  { name: "Malaysia", code: "MY", plugTypes: ["G"] },
  {
    name: "Maldives",
    code: "MV",
    plugTypes: ["A", "C", "D", "G", "J", "K", "L"],
  },
  { name: "Malta", code: "MT", plugTypes: ["G"] },
  { name: "Mexico", code: "MX", plugTypes: ["A", "B"] },
  { name: "Morocco", code: "MA", plugTypes: ["C", "E"] },
  { name: "Nepal", code: "NP", plugTypes: ["C", "D", "M"] },
  { name: "Netherlands", code: "NL", plugTypes: ["C", "F"] },
  { name: "New Zealand", code: "NZ", plugTypes: ["I"] },
  { name: "Nigeria", code: "NG", plugTypes: ["D", "G"] },
  { name: "Norway", code: "NO", plugTypes: ["C", "F"] },
  { name: "Pakistan", code: "PK", plugTypes: ["C", "D"] },
  { name: "Panama", code: "PA", plugTypes: ["A", "B"] },
  { name: "Peru", code: "PE", plugTypes: ["A", "B", "C"] },
  { name: "Philippines", code: "PH", plugTypes: ["A", "B", "C"] },
  { name: "Poland", code: "PL", plugTypes: ["C", "E"] },
  { name: "Portugal", code: "PT", plugTypes: ["C", "F"] },
  { name: "Qatar", code: "QA", plugTypes: ["D", "G"] },
  { name: "Romania", code: "RO", plugTypes: ["C", "F"] },
  { name: "Russia", code: "RU", plugTypes: ["C", "F"] },
  { name: "Saudi Arabia", code: "SA", plugTypes: ["A", "B", "C", "G"] },
  { name: "Singapore", code: "SG", plugTypes: ["G"] },
  { name: "Slovakia", code: "SK", plugTypes: ["C", "E"] },
  { name: "Slovenia", code: "SI", plugTypes: ["C", "F"] },
  { name: "South Africa", code: "ZA", plugTypes: ["C", "D", "M", "N"] },
  { name: "South Korea", code: "KR", plugTypes: ["C", "F"] },
  { name: "Spain", code: "ES", plugTypes: ["C", "F"] },
  { name: "Sri Lanka", code: "LK", plugTypes: ["D", "G", "M"] },
  { name: "Sweden", code: "SE", plugTypes: ["C", "F"] },
  { name: "Switzerland", code: "CH", plugTypes: ["C", "J"] },
  { name: "Taiwan", code: "TW", plugTypes: ["A", "B"] },
  { name: "Tanzania", code: "TZ", plugTypes: ["D", "G"] },
  { name: "Thailand", code: "TH", plugTypes: ["A", "B", "C", "F"] },
  { name: "Turkey", code: "TR", plugTypes: ["C", "F"] },
  { name: "Uganda", code: "UG", plugTypes: ["G"] },
  { name: "Ukraine", code: "UA", plugTypes: ["C", "F"] },
  { name: "United Arab Emirates", code: "AE", plugTypes: ["C", "D", "G"] },
  { name: "United Kingdom", code: "GB", plugTypes: ["G"] },
  { name: "United States", code: "US", plugTypes: ["A", "B"] },
  { name: "Uruguay", code: "UY", plugTypes: ["C", "F", "I", "L"] },
  { name: "Venezuela", code: "VE", plugTypes: ["A", "B"] },
  { name: "Vietnam", code: "VN", plugTypes: ["A", "C", "G"] },
  { name: "Zimbabwe", code: "ZW", plugTypes: ["D", "G"] },
];

export const plugDescriptions: { [key: string]: string } = {
  A: "Type A - North American 2-pin (ungrounded)",
  B: "Type B - North American 3-pin (grounded)",
  C: "Type C - European 2-pin (Europlug)",
  D: "Type D - Indian 3-pin",
  E: "Type E - French 2-pin with earth pin",
  F: "Type F - German 2-pin (Schuko)",
  G: "Type G - British 3-pin",
  H: "Type H - Israeli 3-pin",
  I: "Type I - Australian 3-pin",
  J: "Type J - Swiss 3-pin",
  K: "Type K - Danish 3-pin",
  L: "Type L - Italian 3-pin",
  M: "Type M - South African 3-pin (large)",
  N: "Type N - Brazilian 3-pin",
};

export const plugCompatibility: { [key: string]: string[] } = {
  // Type A plugs fit into Type B sockets
  B: ["A"],
  // Type C (Europlug) fits into E, F, J, K, L, N sockets
  E: ["C"],
  F: ["C"],
  J: ["C"],
  K: ["C"],
  L: ["C"],
  N: ["C"],
  // Type E plugs can fit Type F sockets (and vice versa) in some cases
  // Type D and M are similar (M is larger version of D)
  M: ["D"],
};

export const getCompatiblePlugs = (plugType: string): string[] => {
  const compatible: Set<string> = new Set([plugType]);

  if (plugCompatibility[plugType]) {
    plugCompatibility[plugType].forEach((p) => compatible.add(p));
  }

  Object.entries(plugCompatibility).forEach(([socket, plugs]) => {
    if (plugs.includes(plugType)) {
      compatible.add(socket);
    }
  });

  return Array.from(compatible);
};

// Reduce plug types to only show the most universal ones
// If C is present with any of E, F, J, K, L, N - only keep C
// If A is present with B - only keep A
// If D is present with M - only keep D
export const simplifyPlugTypes = (plugTypes: string[]): string[] => {
  const plugSet = new Set(plugTypes);
  const result = new Set(plugTypes);

  if (plugSet.has("C")) {
    ["E", "F", "J", "K", "L", "N"].forEach((type) => {
      if (plugSet.has(type)) {
        result.delete(type);
      }
    });
  }

  if (plugSet.has("A") && plugSet.has("B")) {
    result.delete("B");
  }

  if (plugSet.has("D") && plugSet.has("M")) {
    result.delete("M");
  }

  return Array.from(result).sort();
};

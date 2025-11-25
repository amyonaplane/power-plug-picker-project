export interface Country {
  name: string;
  plugTypes: string[];
}

export const countries: Country[] = [
  { name: "Afghanistan", plugTypes: ["C", "F"] },
  { name: "Albania", plugTypes: ["C", "F"] },
  { name: "Algeria", plugTypes: ["C", "F"] },
  { name: "Argentina", plugTypes: ["C", "I"] },
  { name: "Australia", plugTypes: ["I"] },
  { name: "Austria", plugTypes: ["C", "F"] },
  { name: "Bahamas", plugTypes: ["A", "B"] },
  { name: "Bangladesh", plugTypes: ["C", "D", "G", "K"] },
  { name: "Belgium", plugTypes: ["C", "E"] },
  { name: "Brazil", plugTypes: ["C", "N"] },
  { name: "Bulgaria", plugTypes: ["C", "F"] },
  { name: "Canada", plugTypes: ["A", "B"] },
  { name: "Chile", plugTypes: ["C", "L"] },
  { name: "China", plugTypes: ["A", "C", "I"] },
  { name: "Colombia", plugTypes: ["A", "B"] },
  { name: "Costa Rica", plugTypes: ["A", "B"] },
  { name: "Croatia", plugTypes: ["C", "F"] },
  { name: "Cuba", plugTypes: ["A", "B", "C", "F"] },
  { name: "Cyprus", plugTypes: ["G"] },
  { name: "Czech Republic", plugTypes: ["C", "E"] },
  { name: "Denmark", plugTypes: ["C", "E", "F", "K"] },
  { name: "Dominican Republic", plugTypes: ["A", "B"] },
  { name: "Ecuador", plugTypes: ["A", "B"] },
  { name: "Egypt", plugTypes: ["C", "F"] },
  { name: "Estonia", plugTypes: ["C", "F"] },
  { name: "Ethiopia", plugTypes: ["C", "E", "F", "L"] },
  { name: "Finland", plugTypes: ["C", "F"] },
  { name: "France", plugTypes: ["C", "E"] },
  { name: "Germany", plugTypes: ["C", "F"] },
  { name: "Ghana", plugTypes: ["D", "G"] },
  { name: "Greece", plugTypes: ["C", "F"] },
  { name: "Hong Kong", plugTypes: ["D", "G"] },
  { name: "Hungary", plugTypes: ["C", "F"] },
  { name: "Iceland", plugTypes: ["C", "F"] },
  { name: "India", plugTypes: ["C", "D", "M"] },
  { name: "Indonesia", plugTypes: ["C", "F"] },
  { name: "Iran", plugTypes: ["C", "F"] },
  { name: "Iraq", plugTypes: ["C", "D", "G"] },
  { name: "Ireland", plugTypes: ["G"] },
  { name: "Israel", plugTypes: ["C", "H", "M"] },
  { name: "Italy", plugTypes: ["C", "F", "L"] },
  { name: "Jamaica", plugTypes: ["A", "B"] },
  { name: "Japan", plugTypes: ["A", "B"] },
  { name: "Jordan", plugTypes: ["B", "C", "D", "F", "G", "J"] },
  { name: "Kenya", plugTypes: ["G"] },
  { name: "Kuwait", plugTypes: ["C", "G"] },
  { name: "Latvia", plugTypes: ["C", "F"] },
  { name: "Lebanon", plugTypes: ["A", "B", "C", "D", "G"] },
  { name: "Lithuania", plugTypes: ["C", "F"] },
  { name: "Luxembourg", plugTypes: ["C", "F"] },
  { name: "Malaysia", plugTypes: ["G"] },
  { name: "Maldives", plugTypes: ["A", "C", "D", "G", "J", "K", "L"] },
  { name: "Malta", plugTypes: ["G"] },
  { name: "Mexico", plugTypes: ["A", "B"] },
  { name: "Morocco", plugTypes: ["C", "E"] },
  { name: "Nepal", plugTypes: ["C", "D", "M"] },
  { name: "Netherlands", plugTypes: ["C", "F"] },
  { name: "New Zealand", plugTypes: ["I"] },
  { name: "Nigeria", plugTypes: ["D", "G"] },
  { name: "Norway", plugTypes: ["C", "F"] },
  { name: "Pakistan", plugTypes: ["C", "D"] },
  { name: "Panama", plugTypes: ["A", "B"] },
  { name: "Peru", plugTypes: ["A", "B", "C"] },
  { name: "Philippines", plugTypes: ["A", "B", "C"] },
  { name: "Poland", plugTypes: ["C", "E"] },
  { name: "Portugal", plugTypes: ["C", "F"] },
  { name: "Qatar", plugTypes: ["D", "G"] },
  { name: "Romania", plugTypes: ["C", "F"] },
  { name: "Russia", plugTypes: ["C", "F"] },
  { name: "Saudi Arabia", plugTypes: ["A", "B", "C", "G"] },
  { name: "Singapore", plugTypes: ["G"] },
  { name: "Slovakia", plugTypes: ["C", "E"] },
  { name: "Slovenia", plugTypes: ["C", "F"] },
  { name: "South Africa", plugTypes: ["C", "D", "M", "N"] },
  { name: "South Korea", plugTypes: ["C", "F"] },
  { name: "Spain", plugTypes: ["C", "F"] },
  { name: "Sri Lanka", plugTypes: ["D", "G", "M"] },
  { name: "Sweden", plugTypes: ["C", "F"] },
  { name: "Switzerland", plugTypes: ["C", "J"] },
  { name: "Taiwan", plugTypes: ["A", "B"] },
  { name: "Tanzania", plugTypes: ["D", "G"] },
  { name: "Thailand", plugTypes: ["A", "B", "C", "F"] },
  { name: "Turkey", plugTypes: ["C", "F"] },
  { name: "Uganda", plugTypes: ["G"] },
  { name: "Ukraine", plugTypes: ["C", "F"] },
  { name: "United Arab Emirates", plugTypes: ["C", "D", "G"] },
  { name: "United Kingdom", plugTypes: ["G"] },
  { name: "United States", plugTypes: ["A", "B"] },
  { name: "Uruguay", plugTypes: ["C", "F", "I", "L"] },
  { name: "Venezuela", plugTypes: ["A", "B"] },
  { name: "Vietnam", plugTypes: ["A", "C", "G"] },
  { name: "Zimbabwe", plugTypes: ["D", "G"] },
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

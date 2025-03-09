export const colors = [
  {
    label: "red",
    value: "#db2626",
  },
  {
    label: "violet",
    value: "#7b39ed",
  },
  {
    label: "yellow",
    value: "#f9cb14",
  },
  {
    label: "green",
    value: "#16a349",
  },
  {
    label: "blue",
    value: "#2462ea",
  },
  {
    label: "orange",
    value: "#f97215",
  },
  {
    label: "rose",
    value: "#e11c48",
  },
  {
    label: "zinc",
    value: "#b5b5b5",
  },
];

export type colorsType = (typeof colors)[number]["label"];

export const cuisines = [
  "Mexican",
  "Italian",
  "Chinese",
  "Japanese",
  "Indian",
  "Greek",
  "French",
  "Spanish",
  "Turkish",
  "Lebanese",
  "Vietnamese",
  "Korean",
  "Argentinian",
  "Peruvian",
  "Ethiopian",
  "Nigerian",
  "German",
  "British",
  "Irish",
  "Swedish",
  "Danish",
  "Polish",
  "Hungarian",
  "Portuguese",
];

export type cuisineType = (typeof cuisines)[number];

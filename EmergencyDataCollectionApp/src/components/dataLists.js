export const visitNumbers = [
  { label: "First visit", value: "1" },
  { label: "Second visit", value: "2" },
  { label: "Third visit", value: "3" },
  { label: "Fourth visit", value: "4" },
  { label: "Fifth visit", value: "5" },
  { label: "Sixth visit", value: "6" },
  { label: "Seventh visit", value: "7" },
  { label: "Eighth visit", value: "8" },
  { label: "Ninth visit", value: "9" },
  { label: "Tenth or more visit", value: "10" },
];
export const RoadCondition = [
  { label: "Road Clear", value: "RC" },
  { label: "Road is blocked(Example: Downed tree or rubble)", value: "RB" },
  { label: "Road is damaged(Example: Slide or washout)", value: "RD" },
  { label: "Downed Power Lines(Example: Downed tree or rubble)", value: "DPL" },
];
export const USStates = [
  { label: "Alabama", value: "AL" },
  { label: "Alaska", value: "AK" },
  { label: "Arizona", value: "AZ" },
  { label: "Arkansas", value: "AR" },
  { label: "California", value: "CA" },
  { label: "Colorado", value: "CO" },
  { label: "Connecticut", value: "CT" },
  { label: "Delaware", value: "DE" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" },
  { label: "Hawaii", value: "HI" },
  { label: "Idaho", value: "ID" },
  { label: "Illinois", value: "IL" },
  { label: "Indiana", value: "IN" },
  { label: "Iowa", value: "IA" },
  { label: "Kansas", value: "KS" },
  { label: "Kentucky", value: "KY" },
  { label: "Louisiana", value: "LA" },
  { label: "Maine", value: "ME" },
  { label: "Maryland", value: "MD" },
  { label: "Massachusetts", value: "MA" },
  { label: "Michigan", value: "MI" },
  { label: "Minnesota", value: "MN" },
  { label: "Mississippi", value: "MS" },
  { label: "Missouri", value: "MO" },
  { label: "Montana", value: "MT" },
  { label: "Nebraska", value: "NE" },
  { label: "Nevada", value: "NV" },
  { label: "New Hampshire", value: "NH" },
  { label: "New Jersey", value: "NJ" },
  { label: "New Mexico", value: "NM" },
  { label: "New York", value: "NY" },
  { label: "North Carolina", value: "NC" },
  { label: "North Dakota", value: "ND" },
  { label: "Ohio", value: "OH" },
  { label: "Oklahoma", value: "OK" },
  { label: "Oregon", value: "OR" },
  { label: "Pennsylvania", value: "PA" },
  { label: "Rhode Island", value: "RI" },
  { label: "South Carolina", value: "SC" },
  { label: "South Dakota", value: "SD" },
  { label: "Tennessee", value: "TN" },
  { label: "Texas", value: "TX" },
  { label: "Utah", value: "UT" },
  { label: "Vermont", value: "VT" },
  { label: "Virginia", value: "VA" },
  { label: "Washington", value: "WA" },
  { label: "West Virginia", value: "WV" },
  { label: "Wisconsin", value: "WI" },
  { label: "Wyoming", value: "WY" },
];
export const StructureType = [
  { label: "Single Family", value: "SF" },
  { label: "Duplex", value: "D" },
  { label: "Apartment", value: "A" },
  { label: "Accessory Dwelling Unit", value: "ADU" },
  { label: "Commercial Building", value: "CB" },
  { label: "Empty Lot", value: "EL" },
];
export const StructureCondition = [
  { label: "Habitable(Can have some damage)", value: "H" },
  { label: "Affected(Books off shelves ect)", value: "A" },
  { label: "Minor(<30 days to repair)", value: "M" },
  { label: "Major(>30 days to repair)", value: "MJR" },
  { label: "Destroyed(Off foundation or pancaked)", value: "D" },
  { label: "Inaccessible", value: "I" },
];

export const HazzardFire = [
  { label: "No Fires", value: "N" },
  { label: "Fires out", value: "F" },
  { label: "Still burning", value: "B" },
];

export const HazzardPropane = [
  { label: "No propane or gas on site", value: "N" },
  { label: "Propane or gas turned off", value: "O" },
  { label: "There is a leak", value: "L" },
  { label: "Unkown if there is any propane on site", value: "U" },
];

export const HazzardWater = [
  { label: "Water is turned off", value: "O" },
  { label: "Water is leaking", value: "L" },
  { label: "Major spill", value: "M" },
  { label: "Unkown if water is off", value: "U" },
];

export const HazzardElectrical = [
  { label: "Power Off", value: "N" },
  { label: "Power On", value: "O" },
  { label: "Wires down", value: "D" },
  { label: "Power status unkown", value: "U" },
];

export const HazzardChemical = [
  { label: "No Chemicals on site", value: "N" },
  { label: "No Leaks", value: "NL" },
  { label: "Chemicals leaking", value: "L" },
  { label: "Unkown if there are chemicals hazzards", value: "U" },
];

export const personal = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
];

export const Animals = [
  { label: "Yes, But are safe and no action is needed", value: "YN" },
  { label: "Yes, and require action or documenting", value: "YY" },
  { label: "No", value: "N" },
];

export const AnimalStatus = [
  { label: "1 Dogs roaming", value: "1DR" },
  { label: "2 Dogs roaming", value: "2DR" },
  { label: "3 Dogs roaming", value: "3DR" },
  { label: "1 Dogs Trapped", value: "1DT" },
  { label: "2 Dogs Trapped", value: "2DT" },
  { label: "3 Dogs Trapped", value: "3DT" },
  { label: "1 Dogs injured", value: "1DI" },
  { label: "2 Dogs injured", value: "2DI" },
  { label: "3 Dogs injured", value: "3DI" },
  { label: "1 Cats roaming", value: "1CR" },
  { label: "2 Cats roaming", value: "2CR" },
  { label: "3 Cats roaming", value: "3CR" },
  { label: "1 Cats Trapped", value: "1CT" },
  { label: "2 Cats Trapped", value: "2CT" },
  { label: "3 Cats Trapped", value: "3CT" },
  { label: "1 Cats injured", value: "1CI" },
  { label: "2 Cats injured", value: "2CI" },
  { label: "3 Cats injured", value: "3CI" },
  { label: "Farm Animals: Add notes", value: "FA" },
];

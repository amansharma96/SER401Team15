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
export const States = [
  { label: "AL", value: "AL" },
  { label: "AK", value: "AK" },
  { label: "AZ", value: "AZ" },
  { label: "AR", value: "AR" },
  { label: "CA", value: "CA" },
  { label: "CO", value: "CO" },
  { label: "CT", value: "CT" },
  { label: "DE", value: "DE" },
  { label: "FL", value: "FL" },
  { label: "GA", value: "GA" },
  { label: "HI", value: "HI" },
  { label: "ID", value: "ID" },
  { label: "IL", value: "IL" },
  { label: "IN", value: "IN" },
  { label: "IA", value: "IA" },
  { label: "KS", value: "KS" },
  { label: "KY", value: "KY" },
  { label: "LA", value: "LA" },
  { label: "ME", value: "ME" },
  { label: "MD", value: "MD" },
  { label: "MA", value: "MA" },
  { label: "MI", value: "MI" },
  { label: "MN", value: "MN" },
  { label: "MS", value: "MS" },
  { label: "MO", value: "MO" },
  { label: "MT", value: "MT" },
  { label: "NE", value: "NE" },
  { label: "NV", value: "NV" },
  { label: "NH", value: "NH" },
  { label: "NJ", value: "NJ" },
  { label: "NM", value: "NM" },
  { label: "NY", value: "NY" },
  { label: "NC", value: "NC" },
  { label: "ND", value: "ND" },
  { label: "OH", value: "OH" },
  { label: "OK", value: "OK" },
  { label: "OR", value: "OR" },
  { label: "PA", value: "PA" },
  { label: "RI", value: "RI" },
  { label: "SC", value: "SC" },
  { label: "SD", value: "SD" },
  { label: "TN", value: "TN" },
  { label: "TX", value: "TX" },
  { label: "UT", value: "UT" },
  { label: "VT", value: "VT" },
  { label: "VA", value: "VA" },
  { label: "WA", value: "WA" },
  { label: "WV", value: "WV" },
  { label: "WI", value: "WI" },
  { label: "WY", value: "WY" },
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

export const SquadNames = [
  { label: "Alpha", value: "A" },
  { label: "Bravo", value: "B" },
  { label: "Charlie", value: "C" },
  { label: "Delta", value: "D" },
  { label: "Echo", value: "E" },
  { label: "Foxtrot", value: "F" },
  { label: "Golf", value: "G" },
];

export const CERTGroupNum = [
  { label: "Group 1", value: "1" },
  { label: "Group 2", value: "2" },
  { label: "Group 3", value: "3" },
  { label: "Group 4", value: "4" },
  { label: "Group 5", value: "5" },
  { label: "Group 6", value: "6" },
  { label: "Group 7", value: "7" },
  { label: "Group 8", value: "8" },
  { label: "Group 9", value: "9" },
  { label: "Group 10", value: "10" },
  { label: "Group 11", value: "11" },
  { label: "Group 12", value: "12" },
  { label: "Group 13", value: "13" },
  { label: "Group 14", value: "14" },
  { label: "Group 15", value: "15" },
  { label: "Group 16", value: "16" },
  { label: "Group 17", value: "17" },
  { label: "Group 18", value: "18" },
];

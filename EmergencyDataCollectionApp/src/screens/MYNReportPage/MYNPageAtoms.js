import { atomWithReset } from "jotai/utils";

export const mynTabsStatusAtom = atomWithReset({
  isInfoPageValidated: false,
  isLocationPageValidated: false,
  isHazardPageValidated: false,
  isPeoplePageValidated: false,
  isAnimalPageValidated: false,
  isNotePageValidated: false,
  tabIndex: 0,
  enableDataValidation: false,
});

export const mynReportAtom = atomWithReset({
  mynPicture: {
    number: 0,
  },
  info: {
    reportType: "MYN",
    hash: 0,
    reportID: "",
    groupName: "",
    startTime: new Date(),
    endTime: new Date(),
    latitude: 0,
    longitude: 0,
    accuracy: 100,
    hazardType: "",
  },
  location: {
    numberOfVisit: "",
    roadCondition: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  },
  hazard: {
    structureType: "",
    structureCondition: "",
    hazardFire: "",
    hazardPropane: "",
    hazardWater: "",
    hazardElectrical: "",
    hazardChemical: "",
  },
  people: {
    greenPersonal: "",
    yellowPersonal: "",
    redPersonal: "",
    trappedPersonal: "",
    personalRequiringShelter: "",
    deceasedPersonal: "",
    deceasedPersonalLocation: "",
    refugees: "",
    certSearch: "",
  },
  animal: {
    anyPetsOrFarmAnimals: "",
    selectedAnimalStatus: [],
    animalNotes: "",
  },
  note: {
    NotesTextArea: "",
  },
});

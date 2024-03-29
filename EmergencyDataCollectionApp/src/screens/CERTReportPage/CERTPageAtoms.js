import { atomWithReset } from "jotai/utils";

export const certTabsStatusAtom = atomWithReset({
  isInfoPageValidated: false,
  isLocationPageValidated: false,
  isHazardPageValidated: false,
  isPeoplePageValidated: false,
  isNotePageValidated: false,
  tabIndex: 0,
  enableDataValidation: true,
});

export const certReportAtom = atomWithReset({
  certPicture: {
    number: 1,
  },
  info: {
    reportType: "CERT",
    hash: 0,
    reportID: "",
    groupName: "",
    squadName: "",
    startTime: new Date(),
    endTime: new Date(),
    numberOfVisit: "",
    roadCondition: "",
  },
  location: {
    structureType: "",
    structureCondition: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    latitude: 0,
    longitude: 0,
    accuracy: 100,
  },
  hazard: {
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
    additionalPersonalRequiringAid: "",
    additionalPersonalRequiringShelter: "",
  },
  note: {
    NotesTextArea: "",
  },
});

import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const isInfoPageValidatedAtom = atom(false);

export const isLocationPageValidatedAtom = atom(false);

export const isHazardPageValidatedAtom = atom(false);

export const isPeoplePageValidatedAtom = atom(false);

export const isAnimalPageValidatedAtom = atom(false);

export const isNotePageValidatedAtom = atom(false);

export const tabIndexAtom = atom(0);

export const startTimeAtom = atom(null);

export const mynReportAtom = atomWithReset({
  info: {
    groupName: "",
    startTime: new Date(),
    latitude: 0,
    longitude: 0,
    accuracy: 100,
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
    deceasedPersonal: "",
    trappedPersonal: "",
    personalRequiringShelter: "",
    deceasedPersonalLocation: "",
  },
  animal: {
    anyPetsOrFarmAnimals: "",
    selectedAnimalStatus: "",
    animalNotes: "",
  },
  note: {
    NotesTextArea: "",
  },
});

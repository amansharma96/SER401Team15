import { atomWithReset } from "jotai/utils";

export const latitudeAtom = atomWithReset(0);
export const longitudeAtom = atomWithReset(0);
export const accuracyAtom = atomWithReset(100);

import { atomWithReset } from "jotai/utils";

export const hazardTabsStatusAtom = atomWithReset({
  isFirstPageValidated: false,
  isSecondPageValidated: false,
  isThirdPageValidated: false,
  tabIndex: 0,
  enableDataValidation: true,
});

export const hazardReportAtom = atomWithReset({
  hazardPicture: {
    number: 1,
  },
  report: {
    ReportType: "HAZARD",
    hash: 0,
    reportID: "",
    StartTime: new Date(),
    EndTime: new Date(),
    HazardType: "",
    Lat: null,
    Long: null,
    Accuracy: null,
    Picture: null,
    Notes: "",
    id: null,
  },
});

export const isUpdateModeAtom = atomWithReset(false);
export const updateID = atomWithReset(null);

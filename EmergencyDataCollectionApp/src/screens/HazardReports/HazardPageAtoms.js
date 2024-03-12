import { atomWithReset , atom} from "jotai/utils";

export const hazardTabsStatusAtom = atomWithReset({
  isFirstPageValidated: false,
  isSecondPageValidated: false,
  isThirdPageValidated: false,
  tabIndex: 0,
  enableDataValidation: true,
});

export const hazardReportAtom = atomWithReset({
  report: {
    ReportType: "",
    StartTime: new Date().toLocaleString(),
    Lat: null,
    Long: null,
    Accuracy: null,
    Picture: null,
    EndTime: "",
    Notes: "",
    id:null,
  },
});



export const isUpdateModeAtom = atomWithReset(false);
export const updateID = atomWithReset(null);

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSetAtom } from "jotai/index";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";

import { certReportAtom, certTabsStatusAtom } from "../CERTPageAtoms";

const LoadUserPreset = () => {
  const setCERTReport = useSetAtom(certReportAtom);
  const resetCERTReport = useResetAtom(certReportAtom);
  const resetCERTTabsStatus = useResetAtom(certTabsStatusAtom);

  useEffect(() => {
    (async () => {
      resetCERTReport();
      resetCERTTabsStatus();
      try {
        const userDataJSON = await AsyncStorage.getItem("userData");
        const userData = JSON.parse(userDataJSON);

        if (!userData || typeof userData !== "object") {
          console.log("Invalid or null user data");
          return;
        }

        setCERTReport((prev) => ({
          ...prev,
          info: {
            ...prev.info,
            groupName: userData.groupName,
          },
          location: {
            ...prev.location,
            city: userData.city,
            state: userData.selectedState,
            zip: userData.zip,
          },
        }));
      } catch (error) {
        console.error("Failed to load CERT user preset", error);
      }
    })();
  }, []);

  return null;
};

export default LoadUserPreset;

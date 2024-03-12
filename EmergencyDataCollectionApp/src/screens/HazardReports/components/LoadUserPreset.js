import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSetAtom } from "jotai/index";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";

import { hazardReportAtom, hazardTabsStatusAtom } from "../HazardPageAtoms";

const LoadUserPreset = () => {
  const setHazardReport = useSetAtom(hazardReportAtom);
  const resetHazardReport = useResetAtom(hazardReportAtom);
  const resetHazardTabsStatus = useResetAtom(hazardTabsStatusAtom);

  useEffect(() => {
    (async () => {
      resetHazardReport();
      resetHazardTabsStatus();
      try {
        const userDataJSON = await AsyncStorage.getItem("userData");
        const userData = JSON.parse(userDataJSON);

        if (!userData || typeof userData !== "object") {
          console.log("Invalid or null user data");
          return;
        }

        setHazardReport((prev) => ({
          ...prev,
          info: {
            ...prev.info,
            groupName: userData.selectedCertGroupNumber,
            squadName: userData.selectedCertSquadName,
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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSetAtom } from "jotai/index";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";

import { mynReportAtom, mynTabsStatusAtom } from "../MYNPageAtoms";

const LoadUserPreset = () => {
  const setMynReport = useSetAtom(mynReportAtom);
  const resetMynReport = useResetAtom(mynReportAtom);
  const resetMynTabsStatus = useResetAtom(mynTabsStatusAtom);

  useEffect(() => {
    (async () => {
      resetMynReport();
      resetMynTabsStatus();
      try {
        const userDataJSON = await AsyncStorage.getItem("userData");
        const userData = JSON.parse(userDataJSON);

        if (!userData || typeof userData !== "object") {
          console.log("Invalid or null user data");
          return;
        }

        setMynReport((prev) => ({
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
        console.error("Failed to load Ready Neighbor user preset", error);
      }
    })();
  }, []);

  return null;
};

export default LoadUserPreset;

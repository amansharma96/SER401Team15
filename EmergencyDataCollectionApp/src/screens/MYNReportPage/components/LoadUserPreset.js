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

        const keyToPathMapping = {
          groupName: "info.groupName",
          city: "location.city",
          zip: "location.zip",
          selectedState: "location.state",
        };

        Object.entries(keyToPathMapping).forEach(([key, path]) => {
          const value = userData[key];
          if (value && typeof value === "string") {
            // Check for non-empty strings
            const keys = path.split(".");
            const lastKey = keys.pop();
            setMynReport((prev) => ({
              ...prev,
              ...keys.reduce((acc, key) => (acc[key] = acc[key] || {}), prev),
              [lastKey]: value,
            }));
          }
        });
      } catch (error) {
        console.error("Failed to load MYN user preset", error);
      }
    })();
  }, []);

  return null;
};

export default LoadUserPreset;

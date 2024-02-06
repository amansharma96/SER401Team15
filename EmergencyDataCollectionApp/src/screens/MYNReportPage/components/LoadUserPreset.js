import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSetAtom } from "jotai/index";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";

import { mynReportAtom } from "../MYNPageAtoms";

const LoadUserPreset = () => {
  const setMynReport = useSetAtom(mynReportAtom);
  const resetMynReport = useResetAtom(mynReportAtom);

  useEffect(() => {
    const loadUserData = async () => {
      resetMynReport();
      try {
        const userDataJSON = await AsyncStorage.getItem("userData");
        const userData = JSON.parse(userDataJSON);
        if (userData.groupName && userData.groupName !== "") {
          setMynReport((prev) => ({
            ...prev,
            info: {
              ...prev.info,
              groupName: userData.groupName,
            },
          }));
        }

        if (userData.city && userData.city !== "") {
          setMynReport((prev) => ({
            ...prev,
            location: {
              ...prev.location,
              city: userData.city,
            },
          }));
        }

        if (userData.zip && userData.zip !== "") {
          setMynReport((prev) => ({
            ...prev,
            location: {
              ...prev.location,
              zip: userData.zip,
            },
          }));
        }

        if (userData.selectedState && userData.selectedState !== "") {
          setMynReport((prev) => ({
            ...prev,
            location: {
              ...prev.location,
              state: userData.selectedState,
            },
          }));
        }
      } catch (error) {
        console.error("Failed to load MYN user preset", error);
      }
    };
    loadUserData();
  }, []);
};

export default LoadUserPreset;

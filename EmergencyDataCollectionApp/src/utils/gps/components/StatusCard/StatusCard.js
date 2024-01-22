import { Box, Center, NativeBaseProvider } from "native-base";
import React, { useState, useEffect } from "react";

import CustomProgressBar from "../../../../components/CustomProgressBar/CustomProgressBar";
import CustomSpinner from "../../../../components/CustomSpinner/CustomSpinner";
import Theme from "../../../Theme";

export default function StatusCard({ timer }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = 100 / (timer / 1000);
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box
          borderColor={Theme.COLORS.TEXT_GREY}
          borderWidth={2}
          borderRadius={10}
          p={5}
        >
          <Box pb="20px">
            <CustomSpinner text="GPS is loading..." testID="custom-spinner" />
          </Box>
          <Box>
            <CustomProgressBar
              progress={progress}
              width={180}
              testID="custom-progress-bar"
            />
          </Box>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

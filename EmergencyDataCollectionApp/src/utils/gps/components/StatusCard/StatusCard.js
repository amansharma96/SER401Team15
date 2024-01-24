import { Box, Center, NativeBaseProvider, Button, Modal } from "native-base";
import React, { useState, useEffect } from "react";

import CustomProgressBar from "../../../../components/CustomProgressBar/CustomProgressBar";
import CustomSpinner from "../../../../components/CustomSpinner/CustomSpinner";
import Theme from "../../../Theme";

const buttonStyle = {
  borderColor: Theme.COLORS.BACKGROUND_YELLOW,
  backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
  borderRadius: Theme.RADIUS.BUTTON,
  width: 150,
  height: 50,
};

const cancelButtonStyle = {
  borderColor: Theme.COLORS.BACKGROUND_YELLOW,
  borderWidth: 1,
  borderRadius: Theme.RADIUS.BUTTON,
  width: 80,
  height: 40,
};

const textStyle = {
  color: Theme.COLORS.TEXT_BLACK,
};

const cancelTextStyle = {
  color: Theme.COLORS.TEXT_GREY,
};

export default function StatusCard({ timer }) {
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
        <Button
          variant="outline"
          style={buttonStyle}
          _text={textStyle}
          onPress={() => setShowModal(true)}
        >
          Fetch GPS
        </Button>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>GPS Progress</Modal.Header>
            <Modal.Body>
              <Box>
                <Box pb="20px">
                  <CustomSpinner
                    text="Loading, please wait..."
                    testID="custom-spinner"
                  />
                </Box>
                <Box>
                  <CustomProgressBar
                    progress={progress}
                    width={230}
                    testID="custom-progress-bar"
                  />
                </Box>
              </Box>
            </Modal.Body>

            <Modal.Footer>
              <Box>
                <Button
                  size="sm"
                  variant="ghost"
                  style={cancelButtonStyle}
                  _text={cancelTextStyle}
                  onPress={() => setShowModal(false)}
                >
                  Cancel
                </Button>
              </Box>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </NativeBaseProvider>
  );
}

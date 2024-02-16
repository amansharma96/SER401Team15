import { Box, Center, NativeBaseProvider, Button, Modal } from "native-base";
import React, { useState, useEffect, useRef } from "react";
import { Text } from "react-native";

import CustomProgressBar from "../../../../components/CustomProgressBar/CustomProgressBar";
import CustomSpinner from "../../../../components/CustomSpinner/CustomSpinner";
import LocationManager_v2 from "../../../../components/LocationManager/LocationManager_v2";
import Theme from "../../../Theme";
import LocationService_v2 from "../../locationService_v2";

const buttonStyle = {
  borderColor: Theme.COLORS.BACKGROUND_YELLOW,
  borderWidth: 1,
  width: 100,
  height: 40,
  backgroundColor: Theme.COLORS.BACKGROUND_YELLOW_OPACITY_20,
  paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
  borderRadius: Theme.RADIUS.BUTTON,
};

const cancelButtonStyle = {
  borderColor: Theme.COLORS.BACKGROUND_YELLOW,
  borderWidth: 1,
  borderRadius: Theme.RADIUS.BUTTON,
  width: 80,
  height: 60,
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
  const [intervalId, setIntervalId] = useState(null);
  const [currentAccuracy, setCurrentAccuracy] = useState(0);

  const stopProgress = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const startProgress = () => {
    stopProgress();
    setProgress(0);
    const intervalDuration = timer / 100;
    const id = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setShowModal(false);
          stopProgress();
          return 100;
        }
        return oldProgress + 1;
      });
    }, intervalDuration);
    setIntervalId(id);
  };

  useEffect(() => {
    if (showModal) {
      startProgress();
    } else {
      stopProgress();
    }

    return () => stopProgress();
  }, [showModal, timer]);

  const {
    locationData,
    isFetchingLocation,
    onStartFetch,
    handleLocationUpdate,
    stopFetchingLocation,
  } = LocationManager_v2();

  const prevLocationDataRef = useRef();

  useEffect(() => {
    if (prevLocationDataRef.current !== locationData) {
      console.log("Location Data Count: " + locationData.length);
      locationData.forEach((location, index) => {
        if (
          !prevLocationDataRef.current ||
          prevLocationDataRef.current[index] !== location
        ) {
          console.log(
            `Index: ${index}, Latitude: ${
              location.coords.latitude
            }, Longitude: ${
              location.coords.longitude
            }, Accuracy: ${location.coords.accuracy.toFixed(1)}`,
          );
          setCurrentAccuracy(location.coords.accuracy.toFixed(1));
        }
      });
      prevLocationDataRef.current = locationData;
    }
  }, [locationData]);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Button
          variant="outline"
          style={buttonStyle}
          _text={textStyle}
          onPress={() => {
            setShowModal(true);
            onStartFetch();
          }}
        >
          Fetch GPS
        </Button>
       
        {isFetchingLocation && (
          <LocationService_v2 onLocationObtained={handleLocationUpdate} />
        )}

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
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
                <Box pt={5} flex={1} alignItems="center">
                  <Text>Current accuracy: {currentAccuracy} m</Text>
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
                  onPress={() => {
                    setShowModal(false);
                    stopProgress();
                    stopFetchingLocation();
                    console.log("User stopped fetching GPS");
                  }}
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

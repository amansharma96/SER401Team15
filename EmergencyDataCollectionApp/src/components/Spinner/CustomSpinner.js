import { Spinner, HStack, Text } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";

const CustomSpinner = ({ text, duration }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!showSpinner) return null;

  return (
    <HStack space="sm">
      <Spinner />
      <Text size="md">{text}</Text>
    </HStack>
  );
};

export default CustomSpinner;

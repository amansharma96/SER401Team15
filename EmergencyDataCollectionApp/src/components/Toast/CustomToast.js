import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
  VStack,
  ButtonText,
} from "@gluestack-ui/themed";
import { Button } from "react-native";

function CustomToastComponent() {
  const toast = useToast();

  const showToast = () => {
    toast.show({
      placement: "bottom",
      duration: 5000,
      render: ({ id }) => {
        return (
          <Toast>
            <VStack space="xs">
              <ToastTitle>Custom Title</ToastTitle>
              <ToastDescription>
                This is a custom toast message.
              </ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };

  return (
    <Button onPress={showToast} title="Show Toast">
      <ButtonText>Show Toast</ButtonText>
    </Button>
  );
}

export default CustomToastComponent;

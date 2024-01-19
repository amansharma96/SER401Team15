import { Alert, AlertIcon, AlertText } from "@gluestack-ui/themed";
import { InfoIcon } from "native-base";

function CustomAlert() {
  return (
    <Alert mx="$2.5" action="info" variant="solid">
      <AlertIcon as={InfoIcon} mr="$3" />
      <AlertText>
        We have updated our terms of service. Please review and accept to
        continue using our service.
      </AlertText>
    </Alert>
  );
}

export default CustomAlert;

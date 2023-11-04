import { StyleSheet } from 'react-native';
import Theme from '../../utils/Theme';

const styles = StyleSheet.create({
  bottomButtonContainer: {
    marginTop: Theme.SPACING.MEDIUM,
  },
  button: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    color: Theme.COLORS.TEXT_BLACK,
    justifyContent: 'center',
    margin: Theme.SPACING.SMALL,
    padding: Theme.BUTTON_PADDING.VERTICAL,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.SPACING.SMALL,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  dateDisplay: {
    borderWidth: 1,
    fontSize: 20,
  },
  dropdown: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  dropdownSmall: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,    
    width: 100,
  },
  dropdownContainer: {
    marginTop: 20,
  },
  dropdownState: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 140,
  },
  gps: {
    borderWidth: 1,
  },
  inlineContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  inlineItem: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    height: 40,
    margin: Theme.SPACING.MEDIUM,
    padding: 10,
    width: 200,
  },
  inputSearchStyle: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  inputSmall: {
    borderWidth: 1,
    height: 40,
    margin: Theme.SPACING.MEDIUM,
    padding: 10,
    width: 60,
  },
  locationContainer: {
    marginTop: Theme.SPACING.SMALL,
  },
  Lower: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },
  selectedTextStyle: {
    color: 'black',
  },
  text: {
    color: Theme.COLORS.TEXT_BLACK,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
  },
  textArea: {
    borderColor: 'black',
    borderWidth: 1,
    height: 150,
    justifyContent: 'flex-start',
    padding: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  textAreaContainer: {
    marginTop: 20,
    width: 300,
  },
  textHeader: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.XLARGE,
  },
  textSmall: {
    color: Theme.COLORS.TEXT_BLACK,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.SMALL,
  },
  Upper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 'auto',
  },
});

export default styles;

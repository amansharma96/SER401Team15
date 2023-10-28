import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeButton from './components/homeButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello SER401!</Text>
      <HomeButton title="Export Reports"></HomeButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

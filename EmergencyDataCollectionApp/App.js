import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NavigationBar from './components/navigation/NavigationBar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaView>
      <NavigationBar></NavigationBar>
      <View style={styles.container}>
        <Text>Hello SER401!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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

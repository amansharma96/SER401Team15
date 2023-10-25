import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NavigationBar from './components/navigation/NavigationBar';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{height: '21%'}}></View>
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

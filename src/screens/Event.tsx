import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventListComponent } from '../components';

export default function App() {
  return (
    <View style={styles.container}>
      <EventListComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
    paddingTop: 10,
  },
});

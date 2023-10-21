import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventInterface } from '../../data/event.data';

interface PropsType {
    event: EventInterface
}
  
export default function App({ event}: PropsType) {
  return (
    <View style={styles.container}>
      <Text>Events Detail!</Text>
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

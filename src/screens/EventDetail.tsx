import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventListComponent } from '../components';
import EventDetail from '../components/Event/EventDetail';
import { EventInterface } from '../data/event.data';

interface PropsType {
    event: EventInterface | undefined
}
  
export default function App(props: any) {
    const event = props.event
    return (
        <View style={styles.container}>
        {event && (<EventDetail event={event}/>)}
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

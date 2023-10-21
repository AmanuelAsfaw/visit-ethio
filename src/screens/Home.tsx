import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { HorizontalScrollItemComponent, SearchBarComponent, VerticalScrollItemComponent } from '../components';
interface PropsType {
  navigation: any;
}
export default function App(props:  any) {
  const navigation = props.navigation
  const onPressSeeAll = () => {
    navigation.navigate('Museum')
  }

  const onPressSeeAllEvent = () => {
    navigation.navigate('Event')
  }
  
  return (
    <View style={styles.container}>
      <SearchBarComponent/>
      <ScrollView style={{marginTop: 10}}>
        <HorizontalScrollItemComponent title="Museums & Parks" onPressSeeAll={onPressSeeAll}/>
        <VerticalScrollItemComponent title='Events' onPressSeeAll={onPressSeeAllEvent}/>
      </ScrollView>
      
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

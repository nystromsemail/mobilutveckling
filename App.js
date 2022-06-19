import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { initDB } from './database/localdb';
import AddSongScreen from './screens/AddSongScreen';
import SelectedSongScreen from './screens/SelectedSongScreen';
import SongsScreen from './screens/SongsScreen';

export default function App() {

  const [dbInitialized, setDbInitialized] = useState(false)
  

  useEffect(() => {
    initDB()
      .then(res => {
        setDbInitialized(true);
      })
      .catch(err => console.log(err))
  }, [])
  const StackedNavigation = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackedNavigation.Navigator>
        <StackedNavigation.Screen
          options={{headerShown: false}}
          name='SongsScreen'
          component={SongsScreen}
        />
        <StackedNavigation.Screen
          options={{headerShown: false}}
          name='SelectedSongScreen'
          component={SelectedSongScreen}
        />
        <StackedNavigation.Screen
          options={{headerShown: false}}
          name='AddSongScreen'
          component={AddSongScreen}
        />
      </StackedNavigation.Navigator>
    </NavigationContainer>
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

import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigator} from '@react-navigation/stack';

import InitMeeting from './screens/InitMeeting';
import Home from './screens/Home';
import Meeting from './screens/Meeting';
import Map from './screens/Map';
import Suggestions from './screens/Suggestions';
import Join from './screens/Join';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    /* TODO: Wypadałoby przeniesc ten navigator do osobnego pliku / plików np w routes/ */
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Meeter'}}
        />
        <Stack.Screen
          name="InitMeeting"
          component={InitMeeting}
          options={{title: 'Zorganizuj spotkanie'}}
        />
        <Stack.Screen
          name="Meeting"
          component={Meeting}
          options={{title: 'Spotkanie'}}
        />
        <Stack.Screen name="Map" component={Map} options={{title: 'Mapa'}} />
        <Stack.Screen
          name="Suggestions"
          component={Suggestions}
          options={{title: 'Propozycje'}}
        />
        <Stack.Screen
          name="Join"
          component={Join}
          options={{title: 'Dołącz do spotkania'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

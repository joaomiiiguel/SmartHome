import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


import Home from "./pages/home";
import SettingsLight from "./pages/SettingsLight";
import SettingsAC from "./pages/SettingsAC";
import SettingsTemp from "./pages/SettingsTemp";
import SettingsFan from "./pages/SettingsFan";
import SettingsWifi from "./pages/SettingsWifi";
import SettingsElect from "./pages/SettingsElect";


export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="SettingsLight" component={SettingsLight} />
          <Stack.Screen name="SettingsAC" component={SettingsAC} />
          <Stack.Screen name="SettingsTemp" component={SettingsTemp} />
          <Stack.Screen name="SettingsFan" component={SettingsFan} />
          <Stack.Screen name="SettingsWifi" component={SettingsWifi} />
          <Stack.Screen name="SettingsElect" component={SettingsElect} />
        </Stack.Navigator>
      
    );
  }
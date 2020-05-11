import React from 'react';
import { View, Text, Button } from 'react-native';

export default function settings({navigation}){
    function navigateToHome(){
        navigation.navigate('Home');
    }
  return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings</Text>
          <Button
            title="Go to Home"
            onPress={navigateToHome}
            />
        </View>
  )
}
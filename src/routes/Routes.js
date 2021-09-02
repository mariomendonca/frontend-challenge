import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Search from '../screens/Search';

export default function Routes() {
  const { Screen, Navigator } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='welcome' component={Welcome} />
        <Screen name='home' component={Home} />
        <Screen name='search' component={Search} />
      </Navigator>
    </NavigationContainer>
  )
}
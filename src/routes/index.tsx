import * as React from 'react';
import Home from "../pages/Home";
import Login from '../pages/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonPage from '../pages/PokemonPage';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <>
      <Stack.Navigator
        // initialRouteName='Pikachu'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PokemonPage" component={PokemonPage} />
      </Stack.Navigator>
    </>
  );
}

export default Routes;
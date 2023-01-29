import React, { useState } from 'react';

// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import Homescreen from "./screens/Homescreen";
import Characters from "./screens/Characters";
import Planets from "./screens/Planets";
import Character from './screens/Character';
import Planet from './screens/Planet';
import Vehicles from './screens/Vehicles';
import Vehicle from './screens/Vehicle';
import Starships from './screens/Starships';
import Starship from './screens/Starship';
import Films from './screens/Films';
import Film from './screens/Film';

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator> 
        <MyStack.Screen name="Homescreen" component={Homescreen} />
        <MyStack.Screen name="Characters" component={Characters} />
        <MyStack.Screen name="Character" component={Character} />        
        <MyStack.Screen name="Planets" component={Planets} />
        <MyStack.Screen name="Planet" component={Planet} />
        <MyStack.Screen name="Vehicles" component={Vehicles} />
        <MyStack.Screen name="Vehicle" component={Vehicle} />        
        <MyStack.Screen name="Starships" component={Starships} />
        <MyStack.Screen name="Starship" component={Starship} />
        <MyStack.Screen name="Films" component={Films} />
        <MyStack.Screen name="Film" component={Film} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
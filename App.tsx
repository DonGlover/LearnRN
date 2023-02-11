import React, { useState } from 'react';

// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Homescreen,
  Characters,
  Character,
  Planets,
  Planet,
  Vehicles ,
  Vehicle ,
  Starships ,
  Starship ,
  Films ,
  Film 
} from "./screenindex";

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
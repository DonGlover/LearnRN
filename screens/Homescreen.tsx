import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

const Homescreen = (props) => {
  const [pageid, setPage] = useState('');
  const navigation = useNavigation();
      
  const goToOtherScreen = (screen) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: screen,
        params: {
          pageid: "",
        },
      })
    );
  }

  let http_URL = { uri: 'https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_logotype.png' };

  const swbutts = ['Characters', 'Planets', 'Vehicles', 'Starships', 'Films']
  return (
    <View style={styles.screen}>      
 
      <Image source={http_URL}
         style={{ height: 230, width: 200, resizeMode: 'contain', margin: 10 }} />
        {swbutts.map(index => {
              return(
                <View>
                <TouchableOpacity style={styles.button} onPress={()=>goToOtherScreen(index)}>
                  <Text style={styles.buttonFont}>
                    Open the list of {index}
                  </Text>
                </TouchableOpacity>
                </View>
              )}
            )}         
      <Text style={{fontSize: 20}} >Using data from swapi.dev.</Text>       
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0080FF',
    padding: 10,
    marginBottom: 5,    
  },
  buttonFont: {
    color: '#FFFFFF',
    fontSize: 20,
  }
});

export default Homescreen;

/*
            <HSButton mytext={`Open the list of ${index}`} pressinfo={index}/>
return (
  <View style={styles.screen}>      
          <HSButton mytext={`Open the list of ${index}`} pressinfo={index}/>
    <Image source={http_URL}
       style={{ height: 230, width: 200, resizeMode: 'contain', margin: 10 }} />
    {swbutts.map(index=><HSButton mytext=`Open the list of {index}}` onPress={goToScreen(index)}/>)}
    <HSButton mytext='Open the list of Characters' onPress={goToCharacterScreen}/>
    <HSButton mytext='Open the list of Planets' onPress={goToPlanetsScreen}/>
    <HSButton mytext='Open the list of Vehicles' onPress={goToVehiclesScreen}/>
    <HSButton mytext='Open the list of Starships' onPress={goToStarshipsScreen}/>
    <HSButton mytext='Open the list of films' onPress={goToFilmsScreen}/> 
    <Text style={{fontSize: 20}} >Using data from swapi.dev.</Text>       
  </View>
);

/*
  const goToCharacterScreen = () => {
    navigation.navigate('Characters', {
      pageid: "",
    });
  };
 

  const HSButton = (props) => {
    console.log("test");
    return(
      <View>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonFont}>
          {props.mytext}
        </Text>
      </TouchableOpacity>
      </View>
    );
  };

   */
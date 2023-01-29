import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homescreen = (props) => {
  const [pageid, setPage] = useState('');
  const navigation = useNavigation();
  
  if (typeof(pageid) === 'undefined' ){
    setPage("1");
  };      

  const goToCharacterScreen = () => {
    navigation.navigate('Characters', {
      pageid: "",
    });
  };

  const goToPlanetsScreen = () => {
      navigation.navigate('Planets', {
        pageid: "",
      });
  };

  const goToVehiclesScreen = () => {
    navigation.navigate('Vehicles', {
      pageid: "",
    });
  };

  const goToStarshipsScreen = () => {
    navigation.navigate('Starships', {
      pageid: "",
    });
  };

  const goToFilmsScreen = () => {
    navigation.navigate('Films', {
      pageid: "",
    });
  };

  const HSButton = (props) => {
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

  let http_URL = { uri: 'https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_logotype.png' };
  return (
    <View style={styles.screen}>      
 
      <Image source={http_URL}
         style={{ height: 230, width: 200, resizeMode: 'contain', margin: 10 }} />
      <HSButton mytext='Open the list of Characters' onPress={goToCharacterScreen}/>
      <HSButton mytext='Open the list of Planets' onPress={goToPlanetsScreen}/>
      <HSButton mytext='Open the list of Vehicles' onPress={goToVehiclesScreen}/>
      <HSButton mytext='Open the list of Starships' onPress={goToStarshipsScreen}/>
      <HSButton mytext='Open the list of films' onPress={goToFilmsScreen}/> 
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
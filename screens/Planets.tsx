import React, {useState, useEffect} from  'react';
import {View, FlatList, Text, Button, StyleSheet, image, InteractionManager} from 'react-native';
import {getBase} from '../Utilities'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Infonavbutton from '../components/Infonavbutton';

var purl;
function setNextURL(url){
  if(purl===undefined || purl===null || purl==="" || url===null || url===""){
    purl = getBase() + '/api/planets/';
  }else{
    purl=url;
  }
}

const ItemRender = ({ title, purl }) => {
  const navigation = useNavigation();

  return(
  <View >
    <Text style={styles.planetstyle} onPress={() => navigation.navigate('Planet', 
      {planeturl: purl,
      })} > 
      {title}
    </Text>
  </View>
);
};

const Planets = (props) => {
  const [planetdatalist, setCData] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  const goToPlanetsScreen = () => {
    navigation.navigate('Planets', {
      pageid: purl,
    });
  }; 

  setNextURL(route.params.pageid);
  
  //console.log(purl);
  useEffect(() => {
    fetch(
        purl
        )
        .then((response) => response.json())
        .then(setCData)
        .catch((err)=>console.log(err))
    }, [purl]);
  
    if(planetdatalist) {      
      setNextURL(planetdatalist.next);
      return (
        <View style={styles.screen}>                  
          <FlatList 
            data={planetdatalist.results}
            
            renderItem={({ item }) => <ItemRender title={item.name} purl={item.url} />}>
          </FlatList>
          <Infonavbutton mytext={'Next'} onPress={goToPlanetsScreen}/>
          <Infonavbutton mytext={"Return to the Home Screen"}
            onPress={() => props.navigation.navigate('Homescreen')}
          />
        </View>
      );
    }
    return <Text>Loading</Text>;
};

const styles = StyleSheet.create({
  screen: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   fontSize: 50
  },
  planetstyle: {
   fontSize: 24,
 },
});

export default Planets;
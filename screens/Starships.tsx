import React, {useState, useEffect} from  'react';
import {View, FlatList, Text, Button, StyleSheet, image, InteractionManager} from 'react-native';
import {getBase} from '../Utilities'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Infonavbutton from '../components/Infonavbutton';

var purl;
function setNextURL(url){
  if(purl===undefined || purl===null || purl==="" || url===null || url===""){
    purl = getBase() + '/api/starships/';
  }else{
    purl=url;
  }
}

const ItemRender = ({ title, curl }) => {
  const navigation = useNavigation();

  return(
  <View >
    <Text style={styles.charstyle} onPress={() => navigation.navigate('Starship', 
      {charurl: curl,
      })} > 
      {title}
    </Text>
  </View>
);
};

const Starships = (props) => {
  const [Starshipdatalist, setCData] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  const goToStarshipsScreen = () => {
    navigation.navigate('Starships', {
      pageid: purl,
    });
  }; 
  
  setNextURL(route.params.pageid);
  
  useEffect(() => {
    fetch(
        purl
        )
        .then((response) => response.json())
        .then(setCData)
        .catch((err)=>console.log(err))
    }, [purl]);

    if(Starshipdatalist) {        
      setNextURL(Starshipdatalist.next);
      return (
        <View style={styles.screen}>                  
          <FlatList 
            data={Starshipdatalist.results}
            
            renderItem={({ item }) => <ItemRender title={item.name} curl={item.url} />}>
          </FlatList>
          <Infonavbutton mytext={'Next'} onPress={goToStarshipsScreen}/>
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
  charstyle: {
    fontSize: 24,
  },
  Purple: {
    // Define your HEX color code here.
    color: '#9C27B0',
  },
  skootch: {
    paddingRight: 10,
  },
});

export default Starships;
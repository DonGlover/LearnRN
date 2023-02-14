import React, {useState, useEffect} from  'react';
import {View, FlatList, Text, Button, StyleSheet, image, InteractionManager} from 'react-native';
import {getBase} from '../Utilities'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Infonavbutton from '../components/Infonavbutton';

var purl;
function setNextURL(url){
  if(purl===undefined || purl===null || purl==="" || url===null || url===""){
    purl = getBase() + '/api/vehicles/';
  }else{
    purl=url;
  }
}


const ItemRender = ({ title, vurl }) => {
  const navigation = useNavigation();
  return(
  <View >
    <Text style={styles.vehiclestyle} onPress={() => navigation.navigate('Vehicle', 
      {vehicleurl: vurl,
      })} > 
      {title}
    </Text>
  </View>
);
};

const Vehicles = (props) => {
  const [vehicledatalist, setCData] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  const goToVehicleScreen = () => {
    navigation.navigate('Vehicles', {
      pageid: nextPageID,
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

    if(vehicledatalist) {     
      setNextURL(vehicledatalist.next);
      return (
        <View style={styles.screen}>                  
          <FlatList 
            data={vehicledatalist.results}
            
            renderItem={({ item }) => <ItemRender title={item.name} vurl={item.url} />}>
          </FlatList>
          <Infonavbutton mytext={'Next'} onPress={goToVehicleScreen}/>
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
  vehiclestyle: {
    fontSize: 25,
    color: 'green',
    textDecorationLine: 'underline'
  },
  Purple: {
    // Define your HEX color code here.
    color: '#9C27B0',
  },
  skootch: {
    paddingRight: 10,
  },
});

export default Vehicles;
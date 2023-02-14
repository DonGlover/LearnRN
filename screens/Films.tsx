import React, {useState, useEffect} from  'react';
import {View, FlatList, Text, Button, StyleSheet, image, InteractionManager} from 'react-native';
import {getBase} from '../Utilities'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Infonavbutton from '../components/Infonavbutton';

var purl;
function setNextURL(url){
  if(purl===undefined || purl===null || purl==="" || url===null || url===""){
    purl = getBase() + '/api/films/';
  }else{
    purl=url;
  }
}

const ItemRender = ({ title, furl }) => {
  const navigation = useNavigation();

  return(
  <View >
    <Text style={styles.charstyle} onPress={() => navigation.navigate('Film', 
      {filmurl: furl,
      })} > 
      {title}
    </Text>
  </View>
);
};

const Films = (props) => {
  const [filmdatalist, setCData] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  const goToFilmsScreen = () => {
    navigation.navigate('Films', {
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

    if(filmdatalist) { 
      setNextURL(filmdatalist.next);
      return (
        <View style={styles.screen}>                  
          <FlatList 
            data={filmdatalist.results}            
            renderItem={({ item }) => <ItemRender title={item.title} furl={item.url} />}>
          </FlatList>
          <Infonavbutton mytext={'Next'} onPress={goToFilmsScreen}/>
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
    fontSize: 25,
    color: 'green',
    textDecorationLine: 'underline'
  },
  skootch: {
    paddingRight: 10,
  },
});

export default Films;
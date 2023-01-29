import React, {useState, useEffect} from  'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import CSImage from '../components/imgfromurl';
import { LabelText, RenderFilms } from '../Utilities';

const Starship = (props) => {
   const [starshipdata, setCData] = useState(null);
   const navigation = useNavigation();
   const route = useRoute();

   var purl = route.params.shiprurl;
      
   //console.log(purl);
   useEffect(() => {
     fetch(
         purl
         )
         .then((response) => response.json())
         .then(setCData)
         .catch((err)=>console.log(err))
     }, [purl]);

     if(starshipdata) {
         return(<View >
            <CSImage type="starships" name={starshipdata.name}/>
            <ScrollView  contentContainerStyle={styles.contentContainer}>
               <Text style={styles.charnamestyle}>{starshipdata.name}</Text>
               <Text style={styles.charstyle}><LabelText label="Model: " />{starshipdata.model}</Text>
               <Text style={styles.charstyle}><LabelText label="Manufacturer: " />{starshipdata.manufacturer}</Text>
               <Text style={styles.charstyle}><LabelText label="Cost in credits: " />{starshipdata.cost_in_credits}</Text>
               <Text style={styles.charstyle}><LabelText label="length: " />{starshipdata.length}</Text>
               <Text style={styles.charstyle}><LabelText label="Max atmospheric speed: " />{starshipdata.max_atmosphering_speed}</Text>
               <Text style={styles.charstyle}><LabelText label="Crew: " />{starshipdata.crew}</Text>
               <Text style={styles.charstyle}><LabelText label="Passengers: " />{starshipdata.passengers}</Text>
               <Text style={styles.charstyle}><LabelText label="Consumables: " />{starshipdata.consumables}</Text>
               <Text style={styles.charstyle}><LabelText label="Hyperdrive rating: " />{starshipdata.hyperdrive_rating}</Text>
               <Text style={styles.charstyle}><LabelText label="MGLT: " />{starshipdata.MGLT}</Text>
               <Text style={styles.charstyle}><LabelText label="Starship class: " />{starshipdata.starship_class}</Text>
               <Text style={styles.charstyle}><LabelText label="Films: "/></Text>
               <RenderFilms list={starshipdata.films}/>   
               </ScrollView>
         </View>);
     }
     return <Text>Loading</Text>;
};

const styles = StyleSheet.create({
   charstyle: {
      padding: 10,
      fontSize: 18,
      justifyContent:'space-between', 
      marginBottom: -20
   },
   charnamestyle: {
      padding: 10,
      fontSize: 26,
      justifyContent:'space-between', 
      marginBottom: -20,
      fontWeight: 'bold',
   },
   scrollcontainer: {
      flex: 1
   },
   contentContainer: {
    backgroundColor: 'lightgrey',
    paddingBottom: 50,
    height: 1000
   }
 });

export default Starship;
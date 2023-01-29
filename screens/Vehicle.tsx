import React, {useState, useEffect} from  'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import CSImage from '../components/imgfromurl';
import { LabelText, RenderFilms} from '../Utilities';

const Vehicle = (props) => {
   const [vehicledata, setCData] = useState(null);
   const navigation = useNavigation();
   const route = useRoute();

   var purl = route.params.vehicleurl;
      
   useEffect(() => {
     fetch(
         purl
         )
         .then((response) => response.json())
         .then(setCData)
         .catch((err)=>console.log(err))
     }, [purl]);

     if(vehicledata) {
         return(<View >

            <CSImage type="vehicles" name={vehicledata.name}/>
            <ScrollView contentContainerStyle={styles.contentContainer}>
               <Text style={styles.vechiclenamestyle}>{vehicledata.name}</Text>
               <Text style={styles.charstyle}><LabelText label="Model:  "/>{vehicledata.model}</Text>
               <Text style={styles.charstyle}><LabelText label="Manufacturer:  "/>{vehicledata.manufacturer}</Text>
               <Text style={styles.charstyle}><LabelText label="Cost in credits: "/>{vehicledata.cost_in_credits}</Text>
               <Text style={styles.charstyle}><LabelText label="Length: "/>{vehicledata.length}</Text>
               <Text style={styles.charstyle}><LabelText label="Max atmospheric speed: "/>{vehicledata.max_atmosphering_speed}</Text>
               <Text style={styles.charstyle}><LabelText label="crew: "/>{vehicledata.crew}</Text>
               <Text style={styles.charstyle}><LabelText label="passengers: "/>{vehicledata.passengers}</Text>
               <Text style={styles.charstyle}><LabelText label="cargo_capacity: "/>{vehicledata.cargo_capacity}</Text>
               <Text style={styles.charstyle}><LabelText label="consumables: "/>{vehicledata.consumables}</Text>
               <Text style={styles.charstyle}><LabelText label="vehicle_class: "/>{vehicledata.vehicle_class}</Text>
               <Text style={styles.charstyle}><LabelText label="Films: "/></Text>
               <RenderFilms list={vehicledata.films}/>                 
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
   vechiclenamestyle: {
      padding: 10,
      fontSize: 26,
      justifyContent:'space-between', 
      marginBottom: -20,
      fontWeight: 'bold',
   },
   contentContainer: {
    backgroundColor: 'lightgrey',
    paddingBottom: 50,
    height: 1000
   }
 });

export default Vehicle;
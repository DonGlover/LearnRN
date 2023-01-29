import React, {useState, useEffect} from  'react';
import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { LabelText, RenderCharacters, RenderFilms } from '../Utilities';

const Planet = (props) => {
   const [planetdata, setCData] = useState(null);
   const navigation = useNavigation();
   const route = useRoute();

   var purl = route.params.planeturl;
      
   useEffect(() => {
     fetch(
         purl
         )
         .then((response) => response.json())
         .then(setCData)
         .catch((err)=>console.log(err))
     }, [purl]);

     if(planetdata) {
         return(<View >
            <Text style={styles.planetnamestyle}>{planetdata.name}</Text>
            <Text style={styles.planetstyle}><LabelText label="Rotation Period: "/>{planetdata.rotation_period}</Text>
            <Text style={styles.planetstyle}><LabelText label="Orbital Period: "/>{planetdata.orbital_period}</Text>
            <Text style={styles.planetstyle}><LabelText label="Diameter: "/>{planetdata.diameter}</Text>
            <Text style={styles.planetstyle}><LabelText label="Climate: "/>{planetdata.climate}</Text>
            <Text style={styles.planetstyle}><LabelText label="Gravity: "/>{planetdata.gravity}</Text>
            <Text style={styles.planetstyle}><LabelText label="Terrain: "/>{planetdata.terrain}</Text>
            <Text style={styles.planetstyle}><LabelText label="Surface Water: "/>{planetdata.surface_water}</Text>
            <Text style={styles.planetstyle}><LabelText label="Population: "/>{planetdata.population}</Text>
            <Text style={styles.planetstyle}><LabelText label="Residents: "/></Text>
            <RenderCharacters list={planetdata.residents}/>
            <Text style={styles.planetstyle}><LabelText label="Films: "/></Text>
            <RenderFilms list={planetdata.films}/>            
         </View>);
     }
     return <Text>Loading</Text>;
};

const styles = StyleSheet.create({
   planetstyle: {
      padding: 10,
      fontSize: 18,
      justifyContent:'space-between', 
      marginBottom: -20
   },
   planetnamestyle: {
      padding: 10,
      fontSize: 26,
      justifyContent:'space-between', 
      marginBottom: -20,
      fontWeight: 'bold',
   },
});

export default Planet;
import React, {useState, useEffect} from  'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { LabelText, RenderCharacters, RenderFilms } from '../Utilities';
import { useFetch } from "react-async";

const headers = { Accept: "application/json" };

const Planet = (props) => {
   const route = useRoute();
   
   var purl = route.params.planeturl;      
   const { data, error, isPending, run } = useFetch(purl, { headers });

   run();

   if (isPending) return <Text>"Loading..."</Text>
   if (error) return <Text>`Something went wrong: ${error.message}`</Text>

   if(data) {  
      return(
      <View >
         <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.planetnamestyle}>{data.name}</Text>
            <Text style={styles.planetstyle}><LabelText label="Rotation Period: "/>{data.rotation_period}</Text>
            <Text style={styles.planetstyle}><LabelText label="Orbital Period: "/>{data.orbital_period}</Text>
            <Text style={styles.planetstyle}><LabelText label="Diameter: "/>{data.diameter}</Text>
            <Text style={styles.planetstyle}><LabelText label="Climate: "/>{data.climate}</Text>
            <Text style={styles.planetstyle}><LabelText label="Gravity: "/>{data.gravity}</Text>
            <Text style={styles.planetstyle}><LabelText label="Terrain: "/>{data.terrain}</Text>
            <Text style={styles.planetstyle}><LabelText label="Surface Water: "/>{data.surface_water}</Text>
            <Text style={styles.planetstyle}><LabelText label="Population: "/>{data.population}</Text>
            <Text style={styles.planetstyle}><LabelText label="Residents: "/></Text>
            <RenderCharacters list={data.residents}/>
            <Text style={styles.planetstyle}><LabelText label="Films: "/></Text>
            <RenderFilms list={data.films}/>
         </ScrollView> 
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
   contentContainer: {
    backgroundColor: 'lightgrey',
    paddingBottom: 50,
    height: 1000
   }
});

export default Planet;

/*
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
     }*/
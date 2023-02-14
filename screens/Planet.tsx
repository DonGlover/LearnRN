import React, {useState, useEffect} from  'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFetch } from "react-async";
import { LabelText} from '../components/LabelText';
import {RenderCharacters, RenderFilms} from '../components/RenderComponents';
import { globalstyles } from '../Utilities';

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
         <ScrollView contentContainerStyle={globalstyles.contentContainer}>
            <Text style={globalstyles.itemnamestyle}>{data.name}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Rotation Period: "/>{data.rotation_period}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Orbital Period: "/>{data.orbital_period}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Diameter: "/>{data.diameter}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Climate: "/>{data.climate}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Gravity: "/>{data.gravity}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Terrain: "/>{data.terrain}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Surface Water: "/>{data.surface_water}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Population: "/>{data.population}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Residents: "/></Text>
            <RenderCharacters list={data.residents}/>
            <Text style={globalstyles.textstyle}><LabelText label="Films: "/></Text>
            <RenderFilms list={data.films}/>
         </ScrollView> 
      </View>);
   }
   return <Text>Loading</Text>;
};

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
            <Text style={globalstyles.planetnamestyle}>{planetdata.name}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Rotation Period: "/>{planetdata.rotation_period}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Orbital Period: "/>{planetdata.orbital_period}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Diameter: "/>{planetdata.diameter}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Climate: "/>{planetdata.climate}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Gravity: "/>{planetdata.gravity}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Terrain: "/>{planetdata.terrain}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Surface Water: "/>{planetdata.surface_water}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Population: "/>{planetdata.population}</Text>
            <Text style={globalstyles.planetstyle}><LabelText label="Residents: "/></Text>
            <RenderCharacters list={planetdata.residents}/>
            <Text style={globalstyles.planetstyle}><LabelText label="Films: "/></Text>
            <RenderFilms list={planetdata.films}/>            
         </View>);
     }*/
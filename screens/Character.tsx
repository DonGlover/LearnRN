import React, {useState, useEffect} from  'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {  useNavigation,useRoute } from '@react-navigation/native';
import { useFetch } from "react-async";
import CSImage from '../components/imgfromurl';
import { LabelText} from '../components/LabelText';
import { RenderVehicles, RenderStarships, RenderFilms } from '../components/RenderComponents';

const headers = { Accept: "application/json" };

const RenderHomeworld = (props) => {
   const [hworlddata, setHWData] = useState(null);
   const navigation = useNavigation();
   useEffect(() => {
      fetch(
          props.hwurl
          )
          .then((response) => response.json())
          .then(setHWData)
          .catch((err)=>console.log(err))
      }, [props.hwurl]);

      if(hworlddata){
         return (
            <View>
               <Text style={styles.linkstyle} onPress={() => navigation.navigate('Planet', 
                     {planeturl: props.hwurl,})} > 
                     <LabelText label="Homeworld: "/>{hworlddata.name}
               </Text>
            </View>
      )}
      return(
         <Text>Loading</Text>
      )
}

/*
const RenderSpecies = (props) => {
   const navigation = useNavigation();

   return props.list.map((p: string) => {
      return ( 
            <Text style={styles.linkstyle} onPress={() => navigation.navigate('Vehicle', 
               {vehicleurl: p,})} > 
               {p}
            </Text>
         )
      }
   )
}
*/

const Character = (props) => {
   const route = useRoute();
   var purl = route.params.charurl;
      
   //console.log(purl);

   const { data, error, isPending, run } = useFetch(purl, { headers });
   run();

   if (isPending) return <Text>"Loading..."</Text>
   if (error) return <Text>`Something went wrong: ${error.message}`</Text>

   if(data) {         
         return(
            <View>
               <CSImage type="characters" name={data.name}/>
               <ScrollView contentContainerStyle={styles.contentContainer}>
                  <Text style={styles.charname}>{data.name}</Text>
                  <Text style={styles.charstyle}><LabelText label="Height: "/>{data.height}</Text>
                  <Text style={styles.charstyle}><LabelText label="Mass: "/>{data.mass}</Text>
                  <Text style={styles.charstyle}><LabelText label="Hair color: "/>{data.hair_color}</Text>
                  <Text style={styles.charstyle}><LabelText label="Skin color: "/>{data.skin_color}</Text>
                  <Text style={styles.charstyle}><LabelText label="Eye color: "/>{data.eye_color}</Text>
                  <Text style={styles.charstyle}><LabelText label="Birth Year: "/>{data.birth_year}</Text>
                  <Text style={styles.charstyle}><LabelText label="Gender: "/>{data.gender}</Text>
                  <RenderHomeworld hwurl={data.homeworld} />
                  <Text style={styles.charstyle}><LabelText label="Vehicles: "/></Text>
                  <RenderVehicles list={data.vehicles} />
                  <Text style={styles.charstyle}><LabelText label="Starships: "/></Text>
                  <RenderStarships list={data.starships} />
                  <Text style={styles.charstyle}><LabelText label="Films: "/></Text>
                  <RenderFilms list={data.films} />
               </ScrollView>
            </View>
            );
         }
     return <Text>Loading</Text>;
};

const styles = StyleSheet.create({
   charstyle: {
      padding: 10,
      fontSize: 18,
      justifyContent:'space-between', 
      marginBottom: -20,
   },
   linkstyle: {
      padding: 10,
      fontSize: 18,
      justifyContent:'space-between', 
      marginBottom: -20,
      color: 'green',
      textDecorationLine: 'underline'
   },
   charname: {
      padding: 10,
      fontSize: 26,
      justifyContent:'space-between', 
      marginBottom: -20,
      fontWeight: 'bold'
   },
  contentContainer: {
   backgroundColor: 'lightgrey',
   paddingBottom: 50,
   height: 1000
  }

 });

 export default Character;

/*
   useEffect(() => {
     fetch(
         purl
         )
         .then((response) => response.json())
         .then(setCData)
         .catch((err)=>console.log(err))
     }, [purl]);
     //if(characterdata) {
 <View>
 <CSImage type="characters" name={characterdata.name}/>
 <ScrollView contentContainerStyle={styles.contentContainer}>
    <Text style={styles.charname}>{characterdata.name}</Text>
    <Text style={styles.charstyle}><LabelText label="Height: "/>{characterdata.height}</Text>
    <Text style={styles.charstyle}><LabelText label="Mass: "/>{characterdata.mass}</Text>
    <Text style={styles.charstyle}><LabelText label="Hair color: "/>{characterdata.hair_color}</Text>
    <Text style={styles.charstyle}><LabelText label="Skin color: "/>{characterdata.skin_color}</Text>
    <Text style={styles.charstyle}><LabelText label="Eye color: "/>{characterdata.eye_color}</Text>
    <Text style={styles.charstyle}><LabelText label="Birth Year: "/>{characterdata.birth_year}</Text>
    <Text style={styles.charstyle}><LabelText label="Gender: "/>{characterdata.gender}</Text>
    <RenderHomeworld hwurl={characterdata.homeworld} />
    <Text style={styles.charstyle}><LabelText label="Vehicles: "/></Text>
    <RenderVehicles list={characterdata.vehicles} />
    <Text style={styles.charstyle}><LabelText label="Starships: "/></Text>
    <RenderStarships list={characterdata.starships} />
    <Text style={styles.charstyle}><LabelText label="Films: "/></Text>
    <RenderFilms list={characterdata.films} />
 </ScrollView>
</View>
*/

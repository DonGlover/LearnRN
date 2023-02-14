import { Text, View} from 'react-native';
import { useFetch } from "react-async";
import React, {useState, useEffect} from  'react';
import { useNavigation } from '@react-navigation/native';
import { getKey, globalstyles } from '../Utilities';

const headers = { Accept: "application/json" };

type nameandurl = {
   name: string,
   url: string
}

type titleandurl = {
   name: string,
   url: string
}

export const RenderCharacters = (characters: Array<nameandurl>) => {
   const navigation = useNavigation();  
   
    return characters.list.map((p: string) => {    
       const { data, error, isPending, run } = useFetch(p, { headers });
       run();
 
       if (isPending) return 
       (
          <View key={getKey()}>
             <Text>"Loading..."</Text>
          </View>
       )
       if (error) return <Text>`Something went wrong: ${error.message}`</Text>
 
       if(data) {
          return ( 
            <View key={getKey()}>
               <Text key={getKey()} style={globalstyles.linkstyle} onPress={() => navigation.navigate('Character', 
                  {charurl: p,})} > 
                  {data.name}
               </Text>
            </View>
          )
       } 
    })
 }
 
 export const RenderVehicles = (vehichles: Array<nameandurl>) => {
   const navigation = useNavigation();
 
    return vehichles.list.map((p: string) => {    
       const { data, error, isPending, run } = useFetch(p, { headers });
       run();
 
       if (isPending) return 
       (
          <View key={getKey()}>
             <Text>"Loading..."</Text>
          </View>
       )
       if (error) return <Text>`Something went wrong: ${error.message}`</Text>
 
       if(data) {
          return (
            <View key={getKey()}>
               <Text style={globalstyles.linkstyle} onPress={() => navigation.navigate('Vehicle', 
                  {vehicleurl: p,})} > 
                  {data.name}
               </Text>
             </View>
          )
       } 
    })
 }
 
 export const RenderStarships = (ships: Array<nameandurl>) => {
 const navigation = useNavigation();  
 
    return ships.list.map((p: string) => {    
       const { data, error, isPending, run } = useFetch(p, { headers });
       run();
 
       if (isPending) return 
       (
          <View key={getKey()}>
             <Text>"Loading..."</Text>
          </View>
       )
       if (error) return <Text>`Something went wrong: ${error.message}`</Text>

       if(data) {
          return ( 
            <View key={getKey()}>
               <Text style={globalstyles.linkstyle} onPress={() => navigation.navigate('Starship', 
                  {shiprurl: p,})} > 
                  {data.name}
               </Text>
            </View>
          )
       } 
    })
 }
 
 export const RenderFilms = (films: Array<titleandurl>) => {
   const navigation = useNavigation();
 
   return films.list.map((p: string) => {    
      const { data, error, isPending, run } = useFetch(p, { headers });
      run();
 
      if (isPending) return 
         (
            <View key={getKey()}>
               <Text>"Loading..."</Text>
            </View>
         )
      if (error) return <Text>`Something went wrong: ${error.message}`</Text>

      if(data) {
          return ( 
            <View key={getKey()}>
               <Text key={getKey()} style={globalstyles.linkstyle} onPress={() => navigation.navigate('Film', 
                  {filmurl: p,})} > 
                  {data.title}
               </Text>
             </View>
          )
       } 
   })
 }

 export const RenderPlanets = (planet: Array<nameandurl>) => {
   const navigation = useNavigation();  
   
   return planet.list.map((p: string) => {    
      const { data, error, isPending, run } = useFetch(p, { headers });
      run();

      if (isPending) return 
      (
         <View key={getKey()}>
            <Text>"Loading..."</Text>
         </View>
      )
      if (error) return <Text>`Something went wrong: ${error.message}`</Text>

      if(data) {
         return ( 
            <View key={getKey()}>
               <Text style={globalstyles.linkstyle} onPress={() => navigation.navigate('Planet', 
                  {planeturl: p,})} > 
                  {data.name}
               </Text>
            </View>
         )
      } 
   })
}

export const RenderHomeworld = (props) => {
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
            <View key={getKey()}>
               <Text style={globalstyles.linkstyle} onPress={() => navigation.navigate('Planet', 
                     {planeturl: props.hwurl,})} > 
                     {hworlddata.name}
               </Text>
            </View>
      )}
      return(
            <View key={getKey()}>
               <Text>"Loading..."</Text>
            </View>
      )
}
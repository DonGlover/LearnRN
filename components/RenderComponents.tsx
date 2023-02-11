import { Text, StyleSheet, View} from 'react-native';
import { useFetch } from "react-async";
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

const headers = { Accept: "application/json" };

type renchar = {
   name: string,
   url: string
}

export const RenderCharacters = (characters: Array<renchar>) => {
   const navigation = useNavigation();  
   
    return characters.list.map((p: string) => {    
       const { data, error, isPending, run } = useFetch(p, { headers });
       run();
 
       if (isPending) return <Text>"Loading..."</Text>
       if (error) return <Text>`Something went wrong: ${error.message}`</Text>
 
       if(data) {
          let newKey = uuid.v4();
          console.log("Characters " + newKey.toString());
          return ( 
             <Text key={newKey.toString()} style={styles.linkstyle} onPress={() => navigation.navigate('Character', 
                {charurl: p,})} > 
                {data.name}
             </Text>
          )
       } 
    })
 }
 
 export const RenderVehicles = (vehichles) => {
   const navigation = useNavigation();
 
    return vehichles.list.map((p: string) => {    
       const { data, error, isPending, run } = useFetch(p, { headers });
       run();
 
       if (isPending) return <Text>"Loading..."</Text>
       if (error) return <Text>`Something went wrong: ${error.message}`</Text>
 
       if(data) {
          let newKey = uuid.v4();
          console.log("Vehicles " + newKey.toString());
          return (
             <Text key={newKey.toString()} style={styles.linkstyle} onPress={() => navigation.navigate('Vehicle', 
                {vehicleurl: p,})} > 
                {data.name}
             </Text>
          )
       } 
    })
 }
 
 export const RenderStarships = (ships) => {
 const navigation = useNavigation();  
 
    return ships.list.map((p: string) => {    
       const { data, error, isPending, run } = useFetch(p, { headers });
       run();
 
       if (isPending) return <Text>"Loading..."</Text>
       if (error) return <Text>`Something went wrong: ${error.message}`</Text>
       let newKey = uuid.v4();
       console.log("Starships " + newKey.toString());
       if(data) {
          console.log("url " + p);
          return ( 
             <Text key={newKey.toString()} style={styles.linkstyle} style={styles.linkstyle} onPress={() => navigation.navigate('Starship', 
                {shiprurl: p,})} > 
                {data.name}
             </Text>
          )
       } 
    })
 }
 
 export const RenderFilms = (films) => {
   const navigation = useNavigation();
 
   return films.list.map((p: string) => {    
      const { data, error, isPending, run } = useFetch(p, { headers });
      run();
 
      if (isPending) return <Text>"Loading..."</Text>
      if (error) return <Text>`Something went wrong: ${error.message}`</Text>
      let newKey = uuid.v4();
      if(data) {
          console.log("Films " + newKey.toString());
          return ( 
             <Text key={newKey.toString()} style={styles.linkstyle} onPress={() => navigation.navigate('Film', 
                {filmurl: p,})} > 
                {data.title}
             </Text>
          )
       } 
   })
 }

 var styles = StyleSheet.create({
   linkstyle: {
      padding: 10,
      fontSize: 18,
      justifyContent:'space-between', 
      marginBottom: -20,
      color: 'green',
      textDecorationLine: 'underline'
   },
  });
 
import { Text, StyleSheet, View} from 'react-native';
import { useFetch } from "react-async";
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

const headers = { Accept: "application/json" };

export function getBase (){
   //http://swapi.py4e.com 
   //https://swapi.dev
   //https://www.swapi.tech
   return "https://swapi.dev";
 }
 
 export function getImageBase(): string{
   return "http://www.scififan.info/assets/images/";
 }

 export function getVideoBase(): string{
  return "http://www.scififan.info/assets/videos/";
 }

 export const RenderCharacters = (props) => {
  const navigation = useNavigation();  
  
   return props.list.map((p: string) => {    
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

export const RenderVehicles = (props) => {
  const navigation = useNavigation();

   return props.list.map((p: string) => {    
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

export const RenderStarships = (props) => {
const navigation = useNavigation();  

   return props.list.map((p: string) => {    
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

export const RenderFilms = (props) => {
  const navigation = useNavigation();

  return props.list.map((p: string) => {    
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

export const LabelText = (props) =>{
  return(
    <Text style={{ fontWeight: 'bold' }}>
        {props.label}
    </Text>
    ) 
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
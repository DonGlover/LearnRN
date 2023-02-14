import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {  useNavigation,useRoute } from '@react-navigation/native';
import { useFetch } from "react-async";
import CSImage from '../components/imgfromurl';
import { LabelText} from '../components/LabelText';
import { RenderVehicles, RenderStarships, RenderFilms, RenderHomeworld } from '../components/RenderComponents';
import { globalstyles } from '../Utilities';

const headers = { Accept: "application/json" };

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
               <ScrollView contentContainerStyle={globalstyles.contentContainer}>
                  <Text style={globalstyles.itemnamestyle}>{data.name}</Text>
                  <Text style={globalstyles.textstyle}><LabelText label="Height: "/>{data.height}</Text>
                  <Text style={globalstyles.textstyle}><LabelText label="Mass: "/>{data.mass}</Text>
                  <Text style={globalstyles.textstyle}><LabelText label="Hair color: "/>{data.hair_color}</Text>
                  <Text style={globalstyles.textstyle}><LabelText label="Skin color: "/>{data.skin_color}</Text>
                  <Text style={globalstyles.textstyle}><LabelText label="Eye color: "/>{data.eye_color}</Text>
                  <Text style={globalstyles.textstyle}><LabelText label="Birth Year: "/>{data.birth_year}</Text>
                  <Text style={globalstyles.textstyle}><LabelText label="Gender: "/>{data.gender}</Text>
                  <Text style={globalstyles.textstyle}><LabelText label="Homeworld: "/></Text>
                  <RenderHomeworld hwurl={data.homeworld} />
                     <Text style={globalstyles.textstyle}><LabelText label="Vehicles: "/></Text>
                  <RenderVehicles list={data.vehicles} />
                     <Text style={globalstyles.textstyle}><LabelText label="Starships: "/></Text>
                  <RenderStarships list={data.starships} />
                     <Text style={globalstyles.textstyle}><LabelText label="Films: "/></Text>
                  <RenderFilms list={data.films} />
               </ScrollView>
            </View>
            );
         }
     return <Text>Loading</Text>;
};

export default Character;
 
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

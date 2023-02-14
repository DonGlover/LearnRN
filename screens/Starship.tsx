import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFetch } from "react-async";
import { LabelText} from '../components/LabelText';
import CSImage from '../components/imgfromurl';
import { RenderFilms } from '../components/RenderComponents';
import { globalstyles } from '../Utilities';

const headers = { Accept: "application/json" };

const Starship = (props) => {
   const route = useRoute();

   var purl = route.params.shiprurl;
   console.log(purl);
   const { data, error, isPending, run } = useFetch(purl, { headers });

   run();

   if (isPending) return <Text>"Loading..."</Text>
   if (error) return <Text>`Something went wrong: ${error.message}`</Text>

   if(data) { 
      return(<View >
         <CSImage type="starships" name={data.name}/>
         <ScrollView  contentContainerStyle={globalstyles.contentContainer}>
            <Text style={globalstyles.itemnamestyle}>{data.name}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Model: " />{data.model}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Manufacturer: " />{data.manufacturer}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Cost in credits: " />{data.cost_in_credits}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="length: " />{data.length}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Max atmospheric speed: " />{data.max_atmosphering_speed}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Crew: " />{data.crew}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Passengers: " />{data.passengers}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Consumables: " />{data.consumables}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Hyperdrive rating: " />{data.hyperdrive_rating}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="MGLT: " />{data.MGLT}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Starship class: " />{data.starship_class}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Films: "/></Text>
            <RenderFilms list={data.films}/>   
            </ScrollView>
      </View>);
   }
   return <Text>Loading</Text>;
};

export default Starship;
/* 
   const [starshipdata, setCData] = useState(null);
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
            <ScrollView  contentContainerStyle={globalstyles.contentContainer}>
               <Text style={globalstyles.charnamestyle}>{starshipdata.name}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Model: " />{starshipdata.model}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Manufacturer: " />{starshipdata.manufacturer}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Cost in credits: " />{starshipdata.cost_in_credits}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="length: " />{starshipdata.length}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Max atmospheric speed: " />{starshipdata.max_atmosphering_speed}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Crew: " />{starshipdata.crew}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Passengers: " />{starshipdata.passengers}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Consumables: " />{starshipdata.consumables}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Hyperdrive rating: " />{starshipdata.hyperdrive_rating}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="MGLT: " />{starshipdata.MGLT}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Starship class: " />{starshipdata.starship_class}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Films: "/></Text>
               <RenderFilms list={starshipdata.films}/>   
               </ScrollView>
         </View>);
     }
   */
  /*
  const Starship = (props) => {
   const route = useRoute();

   var purl = route.params.shiprurl;
   console.log(purl);
   const { data, error, isPending, run } = useFetch(purl, { headers });

   run();

   if (isPending) return <Text>"Loading..."</Text>
   if (error) return <Text>`Something went wrong: ${error.message}`</Text>

   if(data) { 
      return(<View >
         <CSImage type="starships" name={data.name}/>
         <ScrollView  contentContainerStyle={globalstyles.contentContainer}>
            <Text style={globalstyles.charnamestyle}>{starshipdata.name}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Model: " />{data.model}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Manufacturer: " />{data.manufacturer}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Cost in credits: " />{data.cost_in_credits}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="length: " />{data.length}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Max atmospheric speed: " />{data.max_atmosphering_speed}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Crew: " />{data.crew}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Passengers: " />{data.passengers}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Consumables: " />{data.consumables}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Hyperdrive rating: " />{data.hyperdrive_rating}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="MGLT: " />{data.MGLT}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Starship class: " />{data.starship_class}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Films: "/></Text>
            <RenderFilms list={data.films}/>   
            </ScrollView>
      </View>);
   }
   return <Text>Loading</Text>;
};
*/
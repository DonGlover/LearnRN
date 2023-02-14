import { View, Text,  ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFetch } from "react-async";
import { LabelText} from '../components/LabelText';
import CSImage from '../components/imgfromurl';
import { RenderFilms } from '../components/RenderComponents';
import { globalstyles } from '../Utilities';

const headers = { Accept: "application/json" };

const Vehicle = (props) => {
   const route = useRoute();

   var purl = route.params.vehicleurl;      
   const { data, error, isPending, run } = useFetch(purl, { headers });

   run();

   if (isPending) return <Text>"Loading..."</Text>
   if (error) return <Text>`Something went wrong: ${error.message}`</Text>

   if(data) { 
      return(<View >
         <CSImage type="vehicles" name={data.name}/>
         <ScrollView contentContainerStyle={globalstyles.contentContainer}>
            <Text style={globalstyles.itemnamestyle}>{data.name}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Model:  "/>{data.model}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Manufacturer:  "/>{data.manufacturer}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Cost in credits: "/>{data.cost_in_credits}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Length: "/>{data.length}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Max atmospheric speed: "/>{data.max_atmosphering_speed}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="crew: "/>{data.crew}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="passengers: "/>{data.passengers}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="cargo_capacity: "/>{data.cargo_capacity}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="consumables: "/>{data.consumables}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="vehicle_class: "/>{data.vehicle_class}</Text>
            <Text style={globalstyles.textstyle}><LabelText label="Films: "/></Text>
            <RenderFilms list={data.films}/>                 
         </ScrollView>
      </View>);
   }
   return <Text>Loading</Text>;
};

export default Vehicle;
/*
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
            <ScrollView contentContainerStyle={globalstyles.contentContainer}>
               <Text style={globalstyles.vechiclenamestyle}>{vehicledata.name}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Model:  "/>{vehicledata.model}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Manufacturer:  "/>{vehicledata.manufacturer}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Cost in credits: "/>{vehicledata.cost_in_credits}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Length: "/>{vehicledata.length}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Max atmospheric speed: "/>{vehicledata.max_atmosphering_speed}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="crew: "/>{vehicledata.crew}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="passengers: "/>{vehicledata.passengers}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="cargo_capacity: "/>{vehicledata.cargo_capacity}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="consumables: "/>{vehicledata.consumables}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="vehicle_class: "/>{vehicledata.vehicle_class}</Text>
               <Text style={globalstyles.textstyle}><LabelText label="Films: "/></Text>
               <RenderFilms list={vehicledata.films}/>                 
            </ScrollView>
         </View>);
     }
     */
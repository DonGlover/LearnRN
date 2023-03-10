// Load the module
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import Video from 'react-native-video';
import { useFetch } from "react-async";
import {getVideoBase } from '../Utilities';
import {RenderCharacters, RenderVehicles, RenderPlanets} from '../components/RenderComponents';
import { LabelText} from '../components/LabelText';

const headers = { Accept: "application/json" };

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
const ShowVideo = (vidname) => {
   let http_URL = { uri: getVideoBase() + vidname.name.replace(/\s/g, "").toLowerCase() + '.mp4' };

   return(
      <Video source= {http_URL}   // Can be a URL or a local file.
            ref={(ref) => {

               this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
               style={styles.video} />

   )
}

const Film = (props) => {
   const route = useRoute();
   var purl = route.params.filmurl;
      
   const { data, error, isPending, run } = useFetch(purl, { headers });
   
   run();

   if (isPending) return <Text>"Loading..."</Text>
   if (error) return <Text>`Something went wrong: ${error.message}`</Text>

   if(data) {  
      return(
         <View style={styles.videoContainer}>
            <ShowVideo style={styles.video} name={data.title}/>
            <ScrollView contentContainerStyle={styles.contentContainer} >
                  <Text style={styles.filmtitledata}>{data.title}</Text>
                  <Text style={styles.filmdata}><LabelText label="Episode ID: "/>{data.episode_id}</Text>
                  <Text style={styles.filmdata}><LabelText label="Opening Crawl:"/></Text>
                  <Text style={styles.filmdata}>{data.opening_crawl}</Text>
                  <Text style={styles.filmdata}><LabelText label="Director: "/>{data.director}</Text>
                  <Text style={styles.filmdata}><LabelText label="Producer: "/>{data.producer}</Text>
                  <Text style={styles.filmdata}><LabelText label="Release Date: "/>{data.release_date}</Text>
                  <Text style={styles.filmdata}><LabelText label="Characters: "/></Text>
                  <RenderCharacters list={data.characters}/>
                  <Text style={styles.filmdata}><LabelText label="Planets: "/></Text>
                  <RenderPlanets list={data.planets}/>
                  <Text style={styles.filmdata}><LabelText label="Vehicles: "/></Text>
                  <RenderVehicles list={data.vehicles}/>
            </ScrollView>
         </View>
      )
   }
   return <Text>Loading</Text>;
};

// Later on in your styles..
const styles = StyleSheet.create({
   videoContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
  },
  contentContainer: {
   backgroundColor: 'lightgrey',
   paddingBottom: 50,
   height: 2500,
   top: 305,
  },
  filmdata: {
   padding: 10,
   fontSize: 18,
   justifyContent:'space-between', 
   marginBottom: -20,
  },
  filmtitledata: {
      padding: 10,
      fontSize: 26,
      justifyContent:'space-between', 
      marginBottom: -20,
      fontWeight: 'bold'
  },
  video: {
      position: 'absolute',
      top: 0,
      bottom: 300,
      left: 0,
      right: 0,
  },
});

export default Film;

/*
  useEffect(() => {
     fetch(
         purl
         )
         .then((response) => response.json())
         .then(setCData)
         .catch((err)=>console.log(err))
     }, [purl]);

   if(filmdata) {
      return(
         <View style={styles.videoContainer}>
            <ShowVideo style={styles.video} name={filmdata.title}/>
            <ScrollView style={styles.mytext} contentContainerStyle={styles.contentContainer} >
                  <Text style={styles.filmtitledata}>{filmdata.title}</Text>
                  <Text style={styles.filmdata}><LabelText label="Episode ID: "/>{filmdata.episode_id}</Text>
                  <Text style={styles.filmdata}><LabelText label="Opening Crawl:"/></Text>
                  <Text style={styles.filmdata}>{filmdata.opening_crawl}</Text>
                  <Text style={styles.filmdata}><LabelText label="Director: "/>{filmdata.director}</Text>
                  <Text style={styles.filmdata}><LabelText label="Producer: "/>{filmdata.producer}</Text>
                  <Text style={styles.filmdata}><LabelText label="Release Date: "/>{filmdata.release_date}</Text>
                  <Text style={styles.filmdata}><LabelText label="Characters: "/></Text>
                  <RenderCharacters list={filmdata.characters}/>
                  <Text style={styles.filmdata}><LabelText label="Planets: "/></Text>
                  <RenderPlanets list={filmdata.planets}/>
                  <Text style={styles.filmdata}><LabelText label="Vehicles: "/></Text>
                  <RenderVehicles list={filmdata.vehicles}/>
            </ScrollView>
         </View>
      )
   }
   */
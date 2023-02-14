import { StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';

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

 export function getKey(): string {
  let newKey = uuid.v4();
  return newKey.toString();
}

export const goToOtherScreen = (screen) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: screen,
      params: {
        pageid: "",
      },
    })
  );
}

export const globalstyles = StyleSheet.create({
  textstyle: {
     padding: 10,
     fontSize: 18,
     justifyContent:'space-between', 
     marginBottom: -20,
  },
  linkstyle: {
     padding: 10,
     fontSize:25,
     justifyContent:'space-between', 
     marginBottom: -20,
     color: 'green',
     textDecorationLine: 'underline'
  },
  itemnamestyle: {
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
 },
});

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Infonavbutton = (props) => {
   return(
     <View>
     <TouchableOpacity style={styles.button} onPress={props.onPress}>
       <Text style={styles.buttonFont}>
         {props.mytext}
       </Text>
     </TouchableOpacity>
     </View>
   );
 };

 const styles = StyleSheet.create({
   button: {
     alignItems: 'center',
     backgroundColor: '#0080FF',
     padding: 10,
     marginBottom: 5,    
   },
   buttonFont: {
     color: '#FFFFFF',
     fontSize: 20,
   }
 });
 
 export default Infonavbutton;
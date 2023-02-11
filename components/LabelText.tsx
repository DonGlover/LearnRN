import { Text} from 'react-native';

export const LabelText = (props) =>{
   return(
     <Text style={{ fontWeight: 'bold' }}>
         {props.label}
     </Text>
     ) 
  } 
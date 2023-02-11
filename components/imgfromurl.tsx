import React from  'react';
import { View, Image } from 'react-native';
import {getImageBase } from '../Utilities';

 const CSImage = (props) => {
  let http_URL = { uri: getImageBase() + props.type + "/" + props.name.replace(/\s/g, "").toLowerCase() + '.jpg' };

  return(
    <View  style={{alignItems: 'center'}}>
        <Image source={http_URL}
              style={{height: 300, width: 400, resizeMode: 'contain', margin: 10 }} />
    </View>
  );
};

export default CSImage;

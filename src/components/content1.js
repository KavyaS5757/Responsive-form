import React from 'react'
import nitj_logo from './nitj_logo.jpg'
import {View, Image, StyleSheet, Text} from 'react-native';

const Content1 = () => {
  return (
    
    <div>
       <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image
           style={{
            height: 50,
            width: 50
           }}
           source={require('./nitj_logo.jpg')}
        />
        &nbsp;
        &nbsp;
        <h1>Dr. B. R. Ambedkar National Institute of Technology Jalandhar</h1>
       </View>
    </div>
  )
}

export default Content1

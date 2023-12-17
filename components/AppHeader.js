import React from 'react';
import { Header } from 'react-native-elements';

export default function AppHeader(){
  return(
    <Header 
      backgroundColor={'#03c4a1'}
      centerComponent={{
        text:'My Gallery',
        style:{
          color:'#fff',
          fontWeight:'bold',
          fontSize:30,
          // fontFamily:'cursive'
        }
      }}
    />
  )
}
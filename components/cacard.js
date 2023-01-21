
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Cacard=(props)=>{
    return(
        <View>
             <View style={styles.cards}>
     </View>
     <View style={styles.text}><Text style={styles.cname}>{props.text}</Text></View>
        </View>
    
     
    );
}

const styles=StyleSheet.create({
   cards:{
    width:115,
    height:115,
    marginRight:10,
    backgroundColor:'#dcdcdd',
    borderTopStartRadius:10,
    borderTopEndRadius:10
   },
   text:{
    alignItems:'center',
    marginRight:10,
    width:115,
    height:35,
    backgroundColor:'#333533',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
    padding:5

   },
   cname:{
    color:'white'
   }
});
export default Cacard;
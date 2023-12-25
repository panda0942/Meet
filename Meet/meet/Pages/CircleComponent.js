import React from 'react'
import {Text ,View ,ScrollView, StyleSheet, Image ,TouchableOpacity} from 'react-native'



// const Item =(picture)=>{
//     <TouchableOpacity style={styles.Circle}>
//     <Image
//      source={picture}
//      resizeMode="contain"
//      style={styles.Image}
//     />
//       </TouchableOpacity>
// }




const CircleComponent = ({picture, name, onPress})=>{
    return(
      <View style={styles.alignCircleSt}>
      <TouchableOpacity style={styles.Circle} onPress={onPress}>
      <Image
       source={{uri : picture }}
       resizeMode="contain"
       style={styles.Image}
      />
        </TouchableOpacity>


    <Text style={{ fontSize: 9, color: '#26788A',}}>{name}</Text>    
     </View>
    )
};


const styles = StyleSheet.create({

Circle:{
 borderWidth: 2,
 borderColor: '#26788A',
 borderRadius: 200,
 height: 80,
 width: 80,
 alignItems: 'center',
 justifyContent: 'center',
},
Image: {
    height: 70,
    width: 70,
    borderRadius: 200,
    },
    alignCircleSt:{
    alignItems: 'center',
    paddingBottom: 35,
    
    },
})

export default CircleComponent
import React from 'react'
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { useState } from 'react';





const PostSection = ( {picture, name, quote })=>{

 
        const [taps, setTaps] = useState(0);

      
          
      
        const handleTap = () => {
          setTaps(taps + 1);
        };
      

return(
 <View style={styles.container}>
<View>
   <View style={styles.alignPostHead}>
   <Image 
   source={{uri : picture }}
   resizeMode="contain"
   style={styles.Image}
   />
   <Text style={{color:'#26788A', fontSize: 16, fontWeight: 'bold',}}>{name}</Text>
   </View>
   <Text style={{ padding:12,color:'#26788A', }}> {quote} </Text>

   <Image 
   source={{uri : picture }}
   resizeMode="cover"
   style={styles.LargeImage}
   />


   <View style={styles.alignIcons}>
{/*    
    <TouchableOpacity>
    <MaterialIcons name="mode-comment" size={24} color="#26788A" />
    </TouchableOpacity> */}

    <TouchableOpacity style={styles.alignlike} onPress={handleTap}>
    <AntDesign name="like1" size={23} color="#26788A" />
    <Text style={styles.counterText}>{`${taps}`}</Text>
    </TouchableOpacity>
    </View>

</View>
</View>
)
}

const styles = StyleSheet.create({
container:{
     marginTop: 13,
     alignItems: 'center',
     justifyContent: 'center',
       marginBottom: 97,
       backgroundColor: 'white',
    //  borderWidth: 3,
    //  paddingTop: 10,
    //  paddingBottom: 10,
    //  borderLeftColor: 'white',
    //  borderRightColor: 'white',
    //  borderBottomColor: '#26788A',
    //  borderTopColor: '#26788A',
    //  borderRadius: 20,
 },

 Image:{
     height: 50,
     width: 50,
     borderRadius: 200,
     borderWidth: 2,
     borderColor: '#26788A', 
 },
 LargeImage:{
    height: 355,
    width: 370,
    // borderRadius: 10,
    // borderWidth: 2,
    // borderColor: '#26788A', 
},
 alignPostHead:{
 alignItems: 'center',
 flexDirection: 'row',
 gap: 12,
 marginLeft: 10,
 },
 alignIcons:{
 flexDirection:'row',
 alignItems: 'right',
 justifyContent: 'center',
 gap: 30,
 marginTop: 10,
 position: 'relative',
 left:'22%'
 },
 alignlike:{
 alignItems: 'center',
 justifyContent:'center',

 },
 counterText:{
    color: '#26788A',
    fontSize: 10,
 },
})

export default PostSection 
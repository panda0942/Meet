import React from 'react'
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const PostSection = ( {picture, name, quote })=>{
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
   
    <TouchableOpacity>
    <MaterialIcons name="mode-comment" size={24} color="#26788A" />
    </TouchableOpacity>

    <TouchableOpacity>
    <AntDesign name="like1" size={23} color="#26788A" />
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
    borderWidth: 2,
    borderColor: '#26788A', 
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
})

export default PostSection 
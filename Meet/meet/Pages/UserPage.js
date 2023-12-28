import react from 'react'
import {SafeAreaView, ImageBackground, View, Text, StyleSheet, Image} from 'react-native'

const UserPage = ()=>{

const data = require('./users.json');


function evidence(){
     if ( data[0].dev && data[0].mentor && data[0].des && data[0].pm ){ 
        return (
     <Text>
        Software Developer, UI/UX Designer, Mentor, Project Manager 
     </Text>   
         )
        } 
          
      else if ( data[0].dev && data[0].mentor  ){ 
            return (
         <Text>
            Software Developer, Mentor 
         </Text>   
             )
            } 
}



return(
<SafeAreaView style={{flex:1,}}>

<ImageBackground  
style={styles.ImageBackground}
source={require('../assets/Meet.png')}
resizeMode= 'contain'

>
    <View style = {styles.headSection }>
    <Image
    //  source={require('../assets/splash.png')}
    source={{ uri:data[0].picture }}
     resizeMode='contain'
     style={styles.Image}
    />

<View style={styles.alignHeadInfo}>
<Text style={{color:'#26788A', fontSize: 20,fontWeight: 'bold',}}>{data[0].name}</Text>
<Text style={{color:'#26788A', fontSize: 10, marginRight: 20, }}>Dartmouth @ {data[0].year}</Text>
</View>

    </View>
</ImageBackground>

<View style={styles.description}>
 {evidence()}      
</View>




</SafeAreaView>

)}

const styles = StyleSheet.create({
headSection:{
height: 250,
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
Image:{
height: 100,
width: 100,
borderRadius: 50,
borderWidth: 3,
borderColor: '#26788A',
position: 'relative',
right: '30%',
top: '5%',
},
alignHeadInfo:{
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
width: '90%',
paddingLeft: 10,
marginTop: 35,
},
ImageBackground:{
flex: 0.35,
borderWidth: 1,
borderColor: '#26788A',
borderRadius: 10,
},
description:{
alignItems: 'left',
padding: 15,
width: '100%',
},
})

export default UserPage 
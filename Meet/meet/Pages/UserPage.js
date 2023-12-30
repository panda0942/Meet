import react from 'react'
import {SafeAreaView, ImageBackground, View, Text, StyleSheet, Image , TouchableOpacity, FlatList } from 'react-native'

const UserPage = ()=>{

const data = require('./users.json');

const UserList =({item})=>{




   function evidence(){
      if ( item.dev && item.mentor && item.des && item.pm ){ 
         return (
      <Text>
         Software Developer, UI/UX Designer, Mentor, Project Manager 
      </Text>   
          )
         } 
           
       else if ( item.dev && item.mentor && item.des  && !item.pm){ 
             return (
          <Text>
             Software Developer, Mentor, UI/UX Designer
          </Text>   
              )
             } 

             else if ( item.dev && item.mentor && !item.des && !item.pm  ){ 
               return (
            <Text>
               Software Developer, Mentor
            </Text>   
                )
               }    
               else if ( item.dev && !item.mentor && !item.des && !item.pm  ){ 
                  return (
               <Text>
                  Software Developer
               </Text>   
                   )
                  }  
                  else if ( !item.dev && item.mentor && item.des && item.pm  ){ 
                     return (
                  <Text>
                     UI/UX Designer, Mentor, Project Manager 
                  </Text>   
                      )
                     }
                     else if ( !item.dev && item.mentor && !item.des && item.pm  ){ 
                        return (
                     <Text>
                        Project Manager , Mentor 
                     </Text>   
                         )
                        } 
                        else if ( !item.dev && item.mentor && item.des && !item.pm  ){ 
                           return (
                        <Text>
                            UI/UX Designer, Mentor 
                        </Text>   
                            )
                           }  
                           else if ( !item.dev && item.mentor && !item.des && !item.pm  ){ 
                              return (
                           <Text>
                               Mentor 
                           </Text>   
                               )
                              }  
                           else if ( !item.dev && !item.mentor && item.des && item.pm  ){ 
                              return (
                           <Text>
                              Project Manager,  UI/UX Designer  
                           </Text>   
                               )
                              }    
                              else if ( !item.dev && !item.mentor && !item.des && item.pm  ){ 
                                 return (
                              <Text>
                                 Project Manager
                              </Text>   
                                  )
                                 }                                               
 }
 


   return(
      <SafeAreaView style={{flex:1,justifyContent: 'center', gap: 4, marginBottom: 60,}}>
      
      <ImageBackground  
      style={styles.ImageBackground}
      source={require('../assets/Meet.png')}
      resizeMode= 'contain'
      
      >
          <View style = {styles.headSection }>
          <Image
          //  source={require('../assets/splash.png')}
          source={{ uri:item.picture }}
           resizeMode='contain'
           style={styles.Image}
          />
      
      <View style={styles.alignHeadInfo}>
      <Text style={{color:'#26788A', fontSize: 20,fontWeight: 'bold',}}>{item.name}</Text>
      <Text style={{color:'#26788A', fontSize: 10, marginRight: 20, }}>Dartmouth @ {item.year}</Text>
      </View>
      
          </View>
      </ImageBackground>
      <View style={{flex:1, alignItems: 'center', flexDirection: 'column', gap: 5,}}>
         
      <View style={styles.description}>
         <View style={{flex:1,}}>
         <Text style={styles.Occupation}>Occupation</Text>
         <Text style={{fontSize:11, textAlign :'left',}}> {evidence()} </Text>     
         </View>
       
      <View style={{flex:1}}>
         <Text style={styles.Occupation}>Major & Minor</Text>
         <Text style={{fontSize:11, textAlign :'left',}}> {item.major} , {item.minor} </Text>     
      </View>
      </View>
      
      
      <View style={styles.description}>
         <View style={{flex:1}}>
         <Text style={styles.Occupation}>Birthday</Text>
         <Text style={{fontSize:11, textAlign :'left',}}> {item.birthday} </Text>     
         </View>
       
      <View style={{flex:1}}>
         <Text style={styles.Occupation}>Home</Text>
         <Text style={{fontSize:11, textAlign :'left',}}> {item.home} </Text>     
      </View>
      </View>
      
      
      
      <View style={styles.description}>
         <View style={{flex:1,}}>
         <Text style={styles.Occupation}>Favorites</Text>
         <Text style={{fontSize:11, textAlign :'left',}}> {item["favorite thing 1"]} </Text>   
         <Text style={{fontSize:11, textAlign :'left',}}> {item["favorite thing 2"]} </Text>  
         <Text style={{fontSize:11, textAlign :'left',}}> {item["favorite thing 3"]} </Text>    
         </View>
       
      <View style={{flex:1, height:60,}}>
         <Text style={styles.Occupation}>Favorite Dartmouth Tradition</Text>
         <Text style={{fontSize:11, textAlign :'left',}}> {item["favorite dartmouth tradition"]} </Text>     
      </View>
      </View>
      

      <View style={styles.description1}>
      <View style={{flex:1, marginTop: 10, }}>
         <Text style={styles.Occupation}>Fun Fact</Text>
         <Text style={{fontSize:11, textAlign :'left',}}> {item["fun fact"]} </Text>     
      </View>
      </View>
      
      
      
      <View style={{ padding: 5,flex: 0.1}}>
      <TouchableOpacity style={styles.connectButton}>
      <Text style={{color: 'white', fontSize: 15,fontWeight:'bold',}}>Connect</Text>
      </TouchableOpacity>
      </View>
   
      </View>
      </SafeAreaView>
      
      )
}







return(
<FlatList
data = {data}
renderItem={UserList}
keyExtractor={(item)=>(item.name)}
contentContainerStyle={{padding:10,}}
showsVerticalScrollIndicator= {false}
/>
   )




}

const styles = StyleSheet.create({
headSection:{
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
right: '35%',
top: '10%',  
},  
alignHeadInfo:{
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
width: '100%',
paddingLeft: 0,
marginTop: 35,
},
ImageBackground:{
flex: 0.35,
borderWidth: 1,
borderColor: '#26788A',
borderRadius: 20,
padding: 20,
},
description:{
   flex:0.2,
alignItems: 'left',
padding: 15,
width: '100%',
flexDirection: 'row',
// justifyContent: 'space-around',
// alignItems: 'center',
},
Occupation:{
color: '#26788A',
fontWeight: 'bold',
fontSize: 15,
textAlign :'left',
marginBottom: -4,
paddingTop: -1,
},

description1:{
   flex:0.3,
padding: 15,
width: '100%',
flexDirection: 'column',
 justifyContent: 'center',
//  alignItems: 'center',
},
connectButton:{
backgroundColor: '#26788A',
width: 300,
height: 40,
borderRadius:30,
alignItems: 'center',
justifyContent: 'center',

},
})

export default UserPage 
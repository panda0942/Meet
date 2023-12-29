import React from 'react'
import {Text ,View ,ScrollView, SafeAreaView, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import CircleComponent from './CircleComponent'
import PostSection from './PostSection'
import { useState, useRef} from 'react';


const HomePage = ()=>{
  const data = require('./users.json');
  
  const [selectedItem, setSelectedItem] = useState(null);

//   const handleCirclePress = (item) => {
//     setSelectedItem(item);
//   };

const handleCirclePress = (item, index) => {
    
    const position = index * 93.55; 
    // Scroll to the calculated position
    scrollViewRef.current?.scrollTo({ x: position , animated: true });
    verticalScrollViewRef.current?.scrollTo({ y: index * 517 , animated: true });
    setSelectedItem(item);
  };


  const verticalScrollViewRef = useRef(null);


  const scrollViewRef = useRef(null);

    return(
    <SafeAreaView style={styles.container}>
    <View style={styles.headSection}>
     <Image
      source={require('../../meet/assets/Meet.png')}
      resizeMode="contain"
      style={styles.Image}
      />

      <TouchableOpacity>
      <Entypo name="chat" size={27} color="#26788A" />
     </TouchableOpacity>
      </View>
{/* 
      <ScrollView style={styles.HomeProfileSection}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ justifyContent: 'center', gap: 13, }}
      style={{borderWidth:0.5, borderTopColor: 'white', borderLeftColor: 'white', borderRightColor: 'white',borderBottomColor: 'white'}}
      horizontal={true}>
 
       {/* <CircleComponent  picture={data[0].picture} /> */}

       {/* {data.map((item, index) => (
          <CircleComponent key={index} picture={item.picture} name={item.name}    onPress={() => handleCirclePress(item)} />
        ))}
       </ScrollView> */}

      
<View style={{flex:0.25,}}>
       <ScrollView
  ref={scrollViewRef}
  style={styles.HomeProfileSection}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ justifyContent: 'center', gap: 13, }}
  horizontal={true}
>
  {data.map((item, index) => (
    <CircleComponent
      key={index}
      picture={item.picture}
      name={item.name}
      onPress={() => handleCirclePress(item, index)}
    />
  ))}

  </ScrollView>
  </View>

<View style={{flex:1,}}>
<ScrollView showsVerticalScrollIndicator={false} ref={verticalScrollViewRef} contentContainerStyle={{ }}>
  {data.map((item, index) => (
      <PostSection key={index} picture={item.picture} name={item.name} quote={item.quote}/>
  ))}
</ScrollView>
</View>



       {/* <ScrollView showsVerticalScrollIndicator={false}>
        {selectedItem && (
         {data.map((selectedItem) => (
            <PostSection picture={selectedItem.picture} name={selectedItem.name} quote={selectedItem.quote}/>
          ))}

        //   <PostSection
        //     picture={selectedItem.picture}
        //     name={selectedItem.name}
        //     quote={selectedItem.quote}
        //   />
        )}
      </ScrollView>  */}


      {/* <ScrollView  showsVerticalScrollIndicator={false}>

      {data.map((item, index) => (
          <PostSection key={index} picture={item.picture} name={item.name} quote={item.quote}/>
        ))}
      </ScrollView> */}
{/* 
<PostSection  picture={data[0].picture} name={data[0].name}  quote={data[0].quote}/> */}
     </SafeAreaView>


    )
};


const styles = StyleSheet.create({
container:{
 flex:1,
 paddingTop: 10,
backgroundColor: 'white',

},
Image: {
    height: 80,
    width: 80,
    },
    headSection:{
      
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    
    },
})

export default HomePage


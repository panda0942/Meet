import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {useEffect} from 'react'

export default function WelcomePage({navigation}) {

    useEffect(() => {
        // Navigate to the second page after 5 seconds
        const timer = setTimeout(() => {
          navigation.replace('BottomTab'); // Replace 'SecondPage' with the name of your second screen
        }, 3000);
    
        // Clear the timer if the component is unmounted before the timeout
        return () => clearTimeout(timer);
      }, [navigation]);


        
 let date = new Date();
 month = date.getMonth()
 numMon = date.getDate() 


 function Seasons() {
   if ((month === 3 && numMon >= 20) || (month === 4 && numMon <= 21)) {
     return (
       <View>
         <Text> Spring </Text>
       </View>
     );
   } else if ((month === 5 && numMon >= 20) || (month === 6 && numMon <= 21)) {
     return (
       <View>
         <Text> Summer </Text>
       </View>
     );
   } else if ((month === 7 && numMon >= 20) || (month === 8 && numMon <= 21)) {
     return (
       <View>
         <Text> Autumn </Text>
       </View>
     );
   } else if ((month === 9 && numMon >= 20) || (month === 10 && numMon <= 21)) {
     return (
       <View>
         <Text> Winter </Text>
        
       </View>
     );
   } else if ((month === 11 && numMon >= 20) || (month === 12 && numMon <= 21)) {
     return (
       <View>
         {/* <Text> Winter </Text> */}
         <Image
         source={require('../../meet/assets/winter.jpeg')}
         style={{width: 50, height: 50, borderRadius: 50, borderWidth: 2,
         borderColor: '#26788A',}}
         resizeMode='cover'
         />
       </View>
     );
   } else if ((month === 1 && numMon >= 20) || (month === 2 && numMon <= 21)) {
     return (
       <View>
         <Text> Winter </Text>
       </View>
     );
   } else {
     return (
       <View>
         <Text> Invalid Month </Text>
       </View>
     );
   }
 }
 

  return (
    
    <View style={styles.container}>
      <Image
      source={require('../../meet/assets/Meet.png')}
      resizeMode="contain"
      style={styles.Image}
      />
      <Text>{Seasons()}</Text>
      <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
  height: 80,
  width: 120,
  },
});

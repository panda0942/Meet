import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {useEffect} from 'react'

export default function WelcomePage({navigation}) {

    useEffect(() => {
        // Navigate to the second page after 5 seconds
        const timer = setTimeout(() => {
          navigation.replace('BottomTab'); // Replace 'SecondPage' with the name of your second screen
        }, 5000);
    
        // Clear the timer if the component is unmounted before the timeout
        return () => clearTimeout(timer);
      }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
      source={require('../../meet/assets/Meet.png')}
      resizeMode="contain"
      style={styles.Image}
      />
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

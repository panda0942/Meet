import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './Pages/WelcomePage'
import HomePage from './Pages/HomePage'
import CircleComponent from './Pages/CircleComponent'
import SearchScreen from './Pages/SearchScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {
const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
    <NavigationContainer independent={true}  initialRouteScreen="welcome">
    <Stack.Navigator >
    <Stack.Screen
    name="welcome"
    component={WelcomePage}
    options={{headerShown:false}}
    />
   <Stack.Screen
    name="Home"
    component={HomePage}
    options={{headerShown:false}}
    />
  
    </Stack.Navigator>

  

    </NavigationContainer>


      {/* <SearchScreen/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

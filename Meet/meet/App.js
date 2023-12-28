import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './Pages/WelcomePage'
import HomePage from './Pages/HomePage'
import CircleComponent from './Pages/CircleComponent'
import SearchScreen from './Pages/SearchScreen'
import BottomTab from './Pages/BottomTab'
import UserPage from '../meet/Pages/UserPage'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {
const Stack = createStackNavigator();

  return (
     <View style={styles.container}>
      <NavigationContainer independent={true}  >
     <Stack.Navigator initialRouteScreen="welcome" >
    <Stack.Screen
    name="welcome"
    component={WelcomePage}
    options={{headerShown:false}}
    />
   <Stack.Screen
    name="BottomTab"
    component={BottomTab}
    options={{headerShown:false}}
    />
  
    </Stack.Navigator>

  

    </NavigationContainer> 

         {/* <UserPage/>   */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

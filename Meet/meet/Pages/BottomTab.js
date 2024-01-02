import React from 'react'
import {View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import HomePage from './HomePage'
import SearchScreen from './SearchScreen'
import UserPage from './UserPage'
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomTab =()=>{
    const Tab = createBottomTabNavigator();

return(
    <View style={{  backgroundColor:  "white", flex: 1, padding: 5, }}>
<NavigationContainer independent={true} style={{ backgroundColor: "white", }}>
<Tab.Navigator 
screenOptions={{
tabBarActiveTintColor: "#26788A",
tabBarInactiveTintColor: "grey",
tabBarStyle:{
    backgroundColor:  "white", 
    borderRadius: 100,
    
}
}}
>
<Tab.Screen
name="Home"
component={HomePage}
options={{
headerShown:false,
tabBarIcon: ({color,size,focused,style})=>(
<Icon 
name={focused ? 'home': 'home'}
color={color}
size={23}
style={{
   paddingTop: 10,  
}}
/>
),
tabBarLabel:'',
}}
/>


<Tab.Screen
name="Search"
component={SearchScreen}
options={{
headerShown:false,
tabBarIcon: ({color,size,focused,style})=>(
    <Icon 
    name={focused ? 'search': 'search'}
    color={color}
    size={23}
    style={{
       paddingTop: 10, 
    }}
    />
    ),
    tabBarLabel:'',
}}
/>



<Tab.Screen
name="User"
component={UserPage}
options={{
headerShown:false,
tabBarIcon: ({color,size,focused,style})=>(
    <Icon 
    name={focused ? 'user': 'user'}
    color={color}
    size={23}
    style={{
       paddingTop: 10, 
    }}
    />
    ),
    tabBarLabel:'',
}}
/>









</Tab.Navigator>
</NavigationContainer> 
</View>
)
}

export default BottomTab


import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import HomePage from './HomePage'
import SearchScreen from './SearchScreen'

const BottomTab =()=>{
    const Tab = createBottomTabNavigator();

return(
<NavigationContainer independent={true}>
<Tab.Navigator 
screenOptions={{
tabBarActiveTintColor: "#26788A",
tabBarStyle:{
    borderTopColor: "#26788A",
    borderTopWidth: 1, 
}
}}
>
<Tab.Screen
name="Home"
component={HomePage}
options={{
headerShown:false,
}}
/>
<Tab.Screen
name="Search"
component={SearchScreen}
options={{
headerShown:false,
}}
/>










</Tab.Navigator>
</NavigationContainer> 

)
}

export default BottomTab


import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import HomePage from './HomePage'
import SearchScreen from './SearchScreen'
import UserPage from './UserPage'
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomTab =()=>{
    const Tab = createBottomTabNavigator();

return(
<NavigationContainer independent={true}>
<Tab.Navigator 
screenOptions={{
tabBarActiveTintColor: "white",
tabBarInactiveTintColor: "grey",
tabBarStyle:{
    borderTopColor: "#26788A",
    borderTopWidth: 2, 
    backgroundColor:  "#26788A", 
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

)
}

export default BottomTab


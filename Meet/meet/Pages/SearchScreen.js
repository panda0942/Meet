import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 





const SearchScreen = () => {
  const data = require('./users.json');

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
    setSearchQuery(query);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: '#26788A', padding: 10, zIndex:1, }}>
      <Image
        source={{ uri: item.picture }}
        style={{ width: 50, height: 50, borderRadius: 25 ,borderWidth:1,  borderColor: '#26788A',}}
      />
      <Text style={{color:'#26788A', fontSize:20, }} >{item.name}</Text>
      <Text >{item.major}</Text>
      {/* Add other details to display */}
    </TouchableOpacity>
  );

  return (
    <View style={{paddingTop: 10, alignItems: 'center', backgroundColor: 'white',flex: 1,}}>

     <View style={{alignItems: 'center',}}>
     <Image
      source={require('../../meet/assets/Meet.png')}
      resizeMode="contain"
      style={styles.Image}
      />
     

      <TextInput
        style={{ height: 40, borderColor: '#26788A', borderWidth: 1, margin: 10, padding: 5, width: 300, borderRadius: 20, }}
        placeholder="   Search for a Dali Member"
        onChangeText={handleSearch}
        value={searchQuery}
      />
 </View>

    
<View style={{alignItems: 'center',justifyContent: 'center',  }}>
      <FontAwesome name="search-plus" size={48} color="#26788A" style={{ top: 200,  }} />
      </View>




      <View style={{width: 245, alignItems:'center', justifyContent: 'center', flex: 1, position: 'relative', bottom: 40,}}>
      <FlatList
  data={searchResults}
  keyExtractor={(item, index) => item.name + index}
  renderItem={renderItem}
  contentContainerStyle={{backgroundColor: 'white',zIndex:1,}}
  showsVerticalScrollIndicator={false}
/>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 80,
    width: 80,
    },
})



export default SearchScreen;

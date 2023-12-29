
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import CircleComponent from './CircleComponent';
import PostSection from './PostSection';
import { useState, useRef } from 'react';

const HomePage = () => {
  const data = require('./users.json');

  const [selectedItem, setSelectedItem] = useState(null);

  const verticalScrollViewRef = useRef(null);

  const handleCirclePress = (index) => {
    // Scroll to the corresponding index in the PostSection
    verticalScrollViewRef.current?.scrollToIndex({ index, animated: true });
  };

  return (
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

      <View style={{ flex: 0.25 }}>
        <FlatList
          style={styles.HomeProfileSection}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: 'center', gap: 13 }}
          horizontal={true}
          data={data}
          renderItem={({ item, index }) => (
            <CircleComponent
              key={index}
              picture={item.picture}
              name={item.name}
              onPress={() => handleCirclePress(index)}
            />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <PostSection key={index} picture={item.picture} name={item.name} quote={item.quote} />
          )}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          ref={verticalScrollViewRef}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  Image: {
    height: 80,
    width: 80,
  },
  headSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
  },
});

export default HomePage;

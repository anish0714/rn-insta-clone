import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import Story from '../Story';

import storiesData from '../../data/stories';

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={storiesData}
        keyExtractor={(item) => item.user.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Story
            imageUri={item.user.imageUri}
            name={item.user.name}
            id={item.user.id}
          />
        )}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

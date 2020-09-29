import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import Story from '../Story';
const Stories = () => {
  const data = [
    {
      imageUri:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Chetan',
    },
    {
      imageUri:
        'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
      name: 'Abhishek',
    },
    {
      imageUri:
        'https://media.istockphoto.com/photos/in-love-with-the-landscape-picture-id892010070?k=6&m=892010070&s=612x612&w=0&h=LE0vwwLhyLGUpQiP0OYXIYNtNWS5Ezna07YYyQ3WPe0=',
      name: 'Vishal',
    },
    {
      imageUri:
        'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
      name: 'Pranita',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Chetan1',
    },
    {
      imageUri:
        'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
      name: 'Abhishek1',
    },
    {
      imageUri:
        'https://media.istockphoto.com/photos/in-love-with-the-landscape-picture-id892010070?k=6&m=892010070&s=612x612&w=0&h=LE0vwwLhyLGUpQiP0OYXIYNtNWS5Ezna07YYyQ3WPe0=',
      name: 'Vishal1',
    },
    {
      imageUri:
        'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
      name: 'Pranita1',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Story imageUri={item.imageUri} name={item.name} />
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

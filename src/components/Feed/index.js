import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import Post from '../Post';
import Stories from '../Stories';
const Feed = () => {
  const data = [
    {
      user: {
        imageUri:
          'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
        name: 'Pranita1',
      },
      imageUri:
        'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg',
      caption: 'I see this when I sleep #mesmerising #instapic',
      likesCount: 1234,
      postedAt: '6 min ago',
    },
    {
      user: {
        imageUri:
          'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
        name: 'Pranita1',
      },
      imageUri:
        'https://sm.mashable.com/t/mashable_in/photo/default/instagrammusic_2j1u.960.jpg',
      caption: 'I see this when I sleep #mesmerising #instapic',
      likesCount: 1234,
      postedAt: '6 min ago',
    },
    {
      user: {
        imageUri:
          'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
        name: 'Pranita1',
      },
      imageUri:
        'https://s14415.pcdn.co/wp-content/uploads/2019/05/most-instagram-followers.jpg',
      caption: 'I see this when I sleep #mesmerising #instapic',
      likesCount: 1234,
      postedAt: '6 min ago',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.imageUri}
        data={data}
        renderItem={({item}) => <Post post={item} />}
        ListHeaderComponent={<Stories />}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    //  flex: 1
  },
});

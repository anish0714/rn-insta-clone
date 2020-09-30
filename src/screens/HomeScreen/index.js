import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';

import Post from '../../components/Post';
import Feed from '../../components/Feed';
import Stories from '../../components/Stories';
const HomeScreen = () => {
  const post = {
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
  };

  return (
    <SafeAreaView>
      <Feed />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

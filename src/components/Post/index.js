import React from 'react';
import {View, Text} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Post = ({post: {user, imageUri, caption, likesCount, postedAt}}) => {
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body imageUri={imageUri} />
      <Footer caption={caption} likesCount={likesCount} postedAt={postedAt} />
    </View>
  );
};

export default Post;

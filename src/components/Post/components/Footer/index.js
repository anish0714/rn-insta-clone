import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const heartIconPressed = () => {
    setLiked(!liked);
    const count = liked ? -1 : 1;
    setLikesCount(likesCount + count);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={() => heartIconPressed()}>
            {liked ? (
              <IconAntDesign name="heart" size={23} color="red" />
            ) : (
              <IconAntDesign name="hearto" size={23} color="#4f4f4f" />
            )}
          </TouchableWithoutFeedback>
          <IconFontisto name="comment" size={23} color="#4f4f4f" />
          <IconIonicons name="paper-plane-outline" size={25} color="#4f4f4f" />
        </View>

        <IconFontAwesome name="bookmark-o" size={25} color="#4f4f4f" />
      </View>

      <Text style={styles.likes}>{likesCount} likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: 'gray',
    margin: 3,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

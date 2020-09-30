import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import ProfilePicture from '../ProfilePicture';
import styles from './styles';
const Story = ({imageUri, name, id}) => {
  const navigation = useNavigation();

  const onPressStory = () => {
    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableOpacity onPress={() => onPressStory()}>
      <View style={styles.container}>
        <ProfilePicture uri={imageUri} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;

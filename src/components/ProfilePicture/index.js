import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri, size = 70}) => {
  return (
    <View
      style={
        (styles.container,
        {
          width: size + 6,
          height: size + 6,
          margin: 7,
          borderRadius: 40,
          borderWidth: 3,
          borderColor: 'black',
        })
      }>
      <Image
        source={{
          uri: uri,
        }}
        style={
          (styles.image,
          {
            width: size,
            height: size,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: 'white',
          })
        }
      />
    </View>
  );
};

export default ProfilePicture;

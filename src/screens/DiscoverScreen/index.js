import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DiscoverScreen</Text>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

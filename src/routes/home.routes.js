import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => (
            <Feather
              name="camera"
              size={25}
              color="black"
              style={{marginLeft: 10}}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="paper-plane"
              size={25}
              color="black"
              style={{
                marginRight: 10,
              }}
            />
          ),
          headerTitle: () => (
            <Image
              source={{
                uri:
                  'https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png',
              }}
              resizeMode="contain"
              style={{
                height: 100,
                width: 120,
                marginTop: 8,
              }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;

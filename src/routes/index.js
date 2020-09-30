import React from 'react';

import bottomTabNavigator from './bottomTabNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Home"
      component={bottomTabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default Router;

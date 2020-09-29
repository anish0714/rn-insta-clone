/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
        <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

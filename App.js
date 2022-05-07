/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import parking from './assets/parkingline.png';
import car from './assets/car.png';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { transform } from '@babel/core';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
       {/* <View>
         <Text style={styles.test}>
           hyundai
         </Text>
       </View> */}
       {/* <View style={{width:100, height:100, backgroundColor: "black"}}> */}
         <Image source={parking} resizeMode="contain" style={{width: "100%", height:"100%"}}/>
         <Image source={car} resizeMode="contain" style={{width: "20%", height: "20%", position:"absolute" ,transform: [{rotate:'90deg'}],left:60,top:80}}/>
       {/* </View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  test:{
    fontSize: 30
  }
});

export default App;

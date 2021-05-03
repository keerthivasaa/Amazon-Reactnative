import React from 'react';
import { SafeAreaView, View, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Router from './src/router';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
        <Router />
    </SafeAreaView>
  );
};


export default App;

import React from 'react';
import StarterScreen from './src/screens/StarterScreen.js';
import Screen_3 from './src/screens/Screen_13.js';
import MyTabs from './src/components/MyTabs.js'
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    // <Tabs />
    // <Screen_3 />
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  );
};

export default App;
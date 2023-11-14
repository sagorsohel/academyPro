/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';





function App() {
  return (
    <NavigationContainer>
     <MainNavigation/>
    </NavigationContainer>
  );
}

export default App;
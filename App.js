import React from 'react';
import {StatusBar} from 'react-native';

import AppNavigation from './src/navigations/AppNavigation';

export default function () {
  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'#003D90'}
        barStyle={'light-content'}
      />

      <AppNavigation />
    </>
  );
}

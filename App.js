import React from 'react';
import {StatusBar, SafeAreaView, Platform, NativeModules} from 'react-native';

import AppNavigation from './src/navigations/AppNavigation';

export default function () {
  const {StatusBarManager} = NativeModules;
  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'#003D90'}
        barStyle={'light-content'}
      />
      <SafeAreaView
        className="flex-1 bg-[#003D90] w-full h-full"
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
        }}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );
}

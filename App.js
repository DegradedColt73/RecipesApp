import React from 'react';
import HomeDrawer from './routes/HomeDrawer';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontLoaded] = useFonts({
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  return fontLoaded ? <HomeDrawer/> : <AppLoading/>;
};
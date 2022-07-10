import React, { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { DetailScreen, HomeScreen } from './screens';
import { HeaderLeft, HeaderRight, HeaderTitle } from './components';

type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const homeScreenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return {
      title: 'Home Screen',
      headerStyle: {
        backgroundColor: '#0d47a1',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    };
  }, []);

  const DetailScreenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return {
      headerBackVisible: false,
      headerTitleAlign: 'center',
      headerLeft: () => <HeaderLeft />,
      headerTitle: ({ children }) => <HeaderTitle>{children}</HeaderTitle>,
      headerRight: () => <HeaderRight />,
    };
  }, []);

  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} options={homeScreenOptions} />
      <Screen name="Detail" component={DetailScreen} options={DetailScreenOptions} />
    </Navigator>
  );
};

export default memo(RootStack);

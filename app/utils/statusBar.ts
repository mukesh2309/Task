import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {Platform, StatusBar} from 'react-native';

export const useStatusBar = (style: any, bgcolor = '#000', animated = true) => {
  function setBgColor() {
    StatusBar.setBarStyle(style, animated);
    StatusBar.setBackgroundColor(bgcolor);
  }
  useFocusEffect(
    useCallback(() => {
      Platform.OS === 'android' ? setBgColor() : null;
    }, []),
  );
};

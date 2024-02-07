import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../appbar/component';
import {useStatusBar} from '../../utils/statusBar';
import LoadingComponent from '../loader/component';

interface IStatusBar {
  backgroundColor: string;
  barStyle: 'light-content' | 'dark-content';
}

interface WrapperProps {
  children: React.ReactNode;
  style?: object;
  statusbar?: IStatusBar;
  isAppBar?: boolean;
  isLoading?: boolean;
}

const Wrapper = ({
  children,
  style,
  isAppBar = false,
  isLoading = false,
  statusbar = {
    backgroundColor: '#fff',
    barStyle: 'dark-content',
  },
}: WrapperProps) => {
  useStatusBar(statusbar.barStyle, statusbar.backgroundColor);
  return (
    <SafeAreaView style={[styles.container, style]}>
      {isAppBar && <AppBar />}
      {isLoading ? <LoadingComponent /> : null}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Wrapper;

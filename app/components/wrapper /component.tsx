import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../appbar/component';
import {useStatusBar} from '../../utils/statusBar';
import LoadingComponent from '../loader/component';
import { white } from '../../theme/colors';

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
  appBar: {
    title?: string;
    rightIcon?: JSX.Element | null;
    leftIcon?: JSX.Element | null;
  };
}

const Wrapper = ({
  children,
  style,
  isAppBar = false,
  appBar = {
    title: '',
    rightIcon: null,
    leftIcon: null,
  },
  isLoading = false,
  statusbar = {
    backgroundColor: '#fff',
    barStyle: 'dark-content',
  },
}: WrapperProps) => {
  useStatusBar(statusbar.barStyle, statusbar.backgroundColor);
  return (
    <SafeAreaView style={[styles.container, style]}>
      {isAppBar && (
        <AppBar
          title={appBar.title}
          leftIcon={appBar.leftIcon}
          rightIcon={appBar.rightIcon}
        />
      )}
      {isLoading ? <LoadingComponent /> : null}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white[900]
  },
});
export default Wrapper;

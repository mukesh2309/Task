import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {spacing} from '../../theme/spacing';
import {primary} from '../../theme/colors';

interface LoadingComponentProps {
  size?: number;
  color?: string;
}

const LoadingComponent = ({
  size = spacing[40],
  color = primary[900],
}: LoadingComponentProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position :'absolute',
    top :0,
    left : 0,
    right : 0,
    bottom : 0,
  },
});

export default LoadingComponent;

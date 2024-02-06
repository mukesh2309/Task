import React from 'react';
import {Text} from 'react-native';
import {getStyles} from './style';

interface TextProps {
  style?: Object | undefined;
  size?: number;
  font?: string;
  children?: JSX.Element | string;
  onPress?: (e: any) => void;
  color? : any
}

const TextComponent = ({style, children, onPress, size, font,color}: TextProps) => {
  const styles = getStyles({size, font,color});
  return (
    <Text onPress={onPress} style={[styles.text,style]}>
      {children}
    </Text>
  );
};

export default TextComponent;

import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {spacing} from '../../theme/spacing';
import {getStyles} from './style';
import TextComponent from '../text/component';
import {font} from '../../theme/fonts';
import {text} from '../../theme/size';
import { white } from '../../theme/colors';

interface ButtonProps {
  onPress?: () => void;
  name: string;
  icon?: JSX.Element | null;
  style?: any;
  type?: 'filled' | 'outlined';
  textstyle?: Object;
  disabled?: boolean;
}

const Button = ({
  onPress,
  name,
  style,
  type = 'filled',
  icon,
  textstyle,
  disabled = false,
}: ButtonProps) => {
  const styles = getStyles(type);
  return (
    <React.Fragment>
      {type === 'filled' ? (
        <RectButton
          style={[styles.button, style]}
          enabled={!disabled}
          onPress={onPress}>
          <Content
            textstyle={textstyle}
            icon={
              <AntDesign
                name="arrowright"
                size={spacing[20]}
                color={white[900]}
              />
            }
            style={styles.filled}
            name={name}
            type={type}
          />
        </RectButton>
      ) : (
        <Pressable
          style={[styles.button, style]}
          disabled={disabled}
          onPress={onPress}>
          <Content
            style={styles.outlined}
            textstyle={textstyle}
            icon={icon}
            name={name}
            type={type}
          />
        </Pressable>
      )}
    </React.Fragment>
  );
};

const Content = ({icon, name, type, textstyle, style}: ButtonProps) => {
  const styles = getStyles(type);
  return (
    <React.Fragment>
      {icon ? (
        <View style={style}>
          <TextComponent
            font={font.Medium}
            size={text.regular}
            style={[styles.text, textstyle]}>
            {name}
          </TextComponent>
          {icon}
        </View>
      ) : (
        <Text style={[styles.text, textstyle]}>{name}</Text>
      )}
    </React.Fragment>
  );
};

export default Button;

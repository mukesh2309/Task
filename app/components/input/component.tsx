import React from 'react';
import { TextInput, View } from 'react-native';
import { gray } from '../../theme/colors';
import { getStyles } from './style';

interface InputProps {
  value: string;
  onChange: () => {};
  placeholder: string;
  placeholderTextColor: string;
  editAble: boolean;
  multiline: number;
  icon?: JSX.Element | null;
  style?: object;
  color?: string;
}

const InputComponent = ({
  value,
  onChange,
  placeholder,
  placeholderTextColor = gray[500],
  editAble,
  multiline,
  icon,
  style,
  color = gray[500],
}: InputProps) => {
  const styles = getStyles({color});
  return (
    <View style={[styles.container,style]}>
      {icon || null}
      <TextInput
        value={value}
        maxLength={40}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        editable={editAble}
        multiline={multiline}
        style={styles.input}

      />
    </View>
  );
};

export default InputComponent;

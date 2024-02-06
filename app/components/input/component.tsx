import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {getStyles} from './style';
import { primary } from '../../theme/colors';

interface InputProps {
  value: string;
  onChange: () => {};
  placeholder: string;
  placeholderTextColor: string;
  editAble: boolean;
  multiline: number;
  icon?: JSX.Element | null;
}

const InputComponent = ({
  value,
  onChange,
  placeholder,
  placeholderTextColor = primary[300],
  editAble,
  multiline,
  icon,
}: InputProps) => {
  const styles = getStyles({});
  return (
    <View style={styles.container}>
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

import { StyleSheet } from 'react-native';
import { font } from '../../theme/fonts';
import { text } from '../../theme/size';
import { primary } from '../../theme/colors';

export const getStyles = (props: any) =>
  StyleSheet.create({
    text: {
      fontSize: props?.size || text.regular,
      fontFamily: props?.font || font.Medium,
      color : props?.color || primary[900]
    },
  });

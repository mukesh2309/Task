import {Platform, StyleSheet} from 'react-native';
import { spacing } from '../../theme/spacing';
import { font } from '../../theme/fonts';
import { text } from '../../theme/size';
import { primary } from '../../theme/colors';

export const getStyles = (props: any) =>
  StyleSheet.create({
    container :{
      flexDirection :'row',
      alignItems :'center',
      columnGap: spacing[4],
      borderWidth : 1,
      borderColor : props.borderColor || primary[100],
      borderRadius : props.borderRadius || spacing[12],
      paddingVertical : props.paddingVertical || Platform.OS === 'android' ? 0 : spacing[18],
      paddingHorizontal : props.paddingHorizontal || spacing[18],
    },
    input: {
      alignItems : 'center',
      fontFamily : props.fontFamily || font.Medium,
      fontSize : props.fontSize || text.regular,
      flex:1,
      color : props.color || primary[900],
    },
  });

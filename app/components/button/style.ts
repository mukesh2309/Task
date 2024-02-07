import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';
import { primary, white } from '../../theme/colors';
import { text } from '../../theme/size';

export const getStyles = (type: any) =>
  StyleSheet.create({
    border_radius: {
      borderRadius: spacing[12],
    },
    button: {
      flex : 1,
      paddingVertical: spacing[16],
      borderRadius: spacing[20],
      paddingHorizontal: spacing[24],
      borderWidth: 1,
      borderColor: primary[900],
      backgroundColor: type === 'filled' ? primary[900] : 'transparent',
    },
    text: {
      color: type === 'filled' ? white[900] : primary[900],
      textAlign: 'center',
      fontSize : text.value(16),
      
    },
    filled: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    outlined: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'flex-end',
      columnGap: spacing[8],
    },
  });

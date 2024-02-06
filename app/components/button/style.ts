import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';
import { primary, white } from '../../theme/colors';

export const getStyles = (type: any) =>
  StyleSheet.create({
    border_radius: {
      borderRadius: spacing[12],
    },
    button: {
      paddingVertical: spacing[16],
      borderRadius: spacing[12],
      paddingHorizontal: spacing[24],
      borderWidth: 1,
      borderColor: primary[100],
      backgroundColor: type === 'filled' ? primary[900] : 'transparent',
    },
    text: {
      color: type === 'filled' ? white[900] : primary[900],
      textAlign: 'center',
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

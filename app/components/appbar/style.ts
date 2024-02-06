import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';
import { primary } from '../../theme/colors';



export const styles  = StyleSheet.create({
    container : {
        paddingVertical : spacing[12],
        backgroundColor : primary[500],
        paddingHorizontal : spacing[12],
    },
    backBtn : {
        backgroundColor : primary[500],
        width : spacing[40],
        height : spacing[40],
        borderRadius : spacing[50],
        alignItems :"center",
        justifyContent : 'center'
    }
    })
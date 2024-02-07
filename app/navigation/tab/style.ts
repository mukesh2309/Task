import {StyleSheet} from 'react-native';
import {black, gray, white} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import {text} from '../../theme/size';
import {font} from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    zIndex : 1,
    backgroundColor: white[900],
    flexDirection: 'row',
    borderTopRightRadius: spacing[30],
    borderTopLeftRadius: spacing[30],
    paddingHorizontal: spacing[20],
    height: spacing.value(90),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabContainer: {
    flex: 1 / 4,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: gray[500],
    fontSize: text.base,
    fontFamily: font.Medium,
  },
  activeStyle: {
    backgroundColor: black[900],
    borderRadius: spacing.value(100),
    alignItems: 'center',
    justifyContent: 'center',
    height: spacing.value(90),
    width: spacing.value(90),
    borderWidth: spacing[8],
    borderColor: gray[100],
    marginBottom: spacing.value(60),
  },
});

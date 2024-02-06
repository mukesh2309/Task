import { Dimensions, PixelRatio } from 'react-native';

const designWidth = 400;
const scale = Dimensions.get('window').width / designWidth;

export const getDimensions = (value: number) => scale * value;

export const getFontSize = (value: number) =>
  Math.round(PixelRatio.roundToNearestPixel(getDimensions(value)));


  
import { Dimensions } from 'react-native';
import { getDimensions } from '../utils/constants';

export const spacing = {
  1: getDimensions(1),
  4: getDimensions(4),
  8: getDimensions(8),
  10: getDimensions(10),
  12: getDimensions(12),
  14: getDimensions(14),
  16: getDimensions(16),
  18: getDimensions(18),
  20: getDimensions(20),
  22: getDimensions(22),
  24: getDimensions(24),
  26: getDimensions(26),
  28: getDimensions(28),
  30: getDimensions(30),
  32: getDimensions(32),
  34: getDimensions(34),
  36: getDimensions(36),
  38: getDimensions(38),
  40: getDimensions(40),
  42: getDimensions(42),
  44: getDimensions(44),
  46: getDimensions(46),
  48: getDimensions(48),
  50: getDimensions(50),
  58: getDimensions(58),
  value: (value: number) => getDimensions(value),
};


export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').height;
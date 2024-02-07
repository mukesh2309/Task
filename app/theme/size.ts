import { getFontSize } from "../utils/constants";

export const text = {
  xxs: getFontSize(6),
  xs: getFontSize(8),
  s: getFontSize(10),
  base: getFontSize(12),
  regular: getFontSize(14),
  medium: getFontSize(16),
  large: getFontSize(18),
  x: getFontSize(20),
  xl: getFontSize(22),
  xxl: getFontSize(24),
  x_xs : getFontSize(28),
  value : (val:any) => getFontSize(val)
};

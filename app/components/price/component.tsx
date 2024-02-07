import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {primary, white} from '../../theme/colors';
import TextComponent from '../text/component';
import {text} from '../../theme/size';
import {spacing} from '../../theme/spacing';

interface PriceComponentProps {
  price: number;
  name?: string;
  color?: string;
  type?: 'discount' | 'price';
  size?: number;
}
const PriceComponent = ({
  price,
  name,
  type,
  size,
  color,
}: PriceComponentProps) => {
  return (
    <React.Fragment>
      {type === 'discount' ? (
        <View style={styles.badge}>
          <TextComponent
            color={color || white[900]}
            size={size || text.value(14)}>
            {`$ ${price}`}
          </TextComponent>
          <TextComponent
            color={color || white[900]}
            size={size || text.value(14)}>
            {name}
          </TextComponent>
        </View>
      ) : (
        <TextComponent
          color={color || primary[900]}
          size={size || text.value(22)}>
          {`$ ${price}`}
        </TextComponent>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: spacing[8],
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: spacing[8],
    backgroundColor: primary[900],
    paddingHorizontal: spacing[16],
    paddingVertical: spacing[4],
    borderRadius: spacing[20],
  },
});

export default PriceComponent;

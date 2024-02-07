import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {black, gray} from '../../theme/colors';
import {font} from '../../theme/fonts';
import {text} from '../../theme/size';
import {spacing} from '../../theme/spacing';
import PriceComponent from '../price/component';
import TextComponent from '../text/component';

interface ItemComponent {
  id: number;
  name: string;
  price: number;
  img: string;
}
const ItemComponent = ({id, name, price, img}: ItemComponent) => {
  const [count, setCount] = React.useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{uri: img}} style={styles.img} />
        <View>
          <TextComponent
            size={text.value(18)}
            font={font.Regular}
            color={black[900]}>
            {name}
          </TextComponent>
          <PriceComponent
            size={text.value(16)}
            price={price}
            color={black[900]}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Pressable onPress={handleDec} style={styles.incDec}>
          <AntDesign name={'minus'} size={spacing[18]} color={black[900]} />
        </Pressable>
        <TextComponent size={text.value(18)} color={black[900]}>
          {count}
        </TextComponent>
        <Pressable onPress={handleInc} style={styles.incDec}>
          <AntDesign name={'plus'} size={spacing[18]} color={black[900]} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[18],
    paddingVertical: spacing[14],
    borderBottomWidth: 1,
    borderBottomColor: black[300],
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: spacing[12],
  },
  img: {
    width: spacing[50],
    height: spacing[50],
    borderRadius: spacing[12],
  },
  incDec: {
    height: spacing[32],
    width: spacing[32],
    backgroundColor: gray[100],
    borderRadius: spacing.value(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemComponent;

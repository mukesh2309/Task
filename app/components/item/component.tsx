import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {black, gray} from '../../theme/colors';
import {font} from '../../theme/fonts';
import {text} from '../../theme/size';
import {spacing} from '../../theme/spacing';
import PriceComponent from '../price/component';
import TextComponent from '../text/component';
import { trunCateStringWith3Dots } from '../../utils/truncateWithThreeDots';

interface ItemComponent {
  id: number;
  name: string;
  price: number;
  img: string;
  qty : number;
  incPress: ()=>void;
  decPress: ()=>void;
}
const ItemComponent = ({id, name, price, img,qty,incPress,decPress}: ItemComponent) => {
  const [count, setCount] = React.useState(qty);

  const handleInc = () => {
    setCount(count + 1);
    incPress();
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
      decPress()
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{uri: img}} style={styles.img} />
        <View>
          <TextComponent
            size={text.value(15)}
            color={black[900]}>
            {trunCateStringWith3Dots(name,18)}
          </TextComponent>
          <PriceComponent
            size={text.value(15)}
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

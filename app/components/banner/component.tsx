import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {secondary, white} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import TextComponent from '../text/component';
import {text} from '../../theme/size';
import { font } from '../../theme/fonts';

interface BannerComponentProps {
  image: string;
  title: string;
  subTitle: string;
  info : string;
}

const BannerComponent = ({title, subTitle, image,info}: BannerComponentProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View>
        <TextComponent color={white[900]} size={text.large} style={text.medium}>{info}</TextComponent>
        <TextComponent font={font.Bold} color={white[900]} size={text.xxl}>{title}</TextComponent>
        <TextComponent color={white[900]} style={text.medium}>{subTitle}</TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing[20],
    marginTop: spacing[14],
    paddingVertical: spacing[10],
    paddingHorizontal: spacing[20],
    backgroundColor: secondary[800],
    height: spacing.value(120),
    borderRadius: spacing[16],
    marginLeft: spacing[20],
    width: spacing.value(300),
    flexDirection: 'row',
    alignItems :"center",
    columnGap : spacing[20]
  },
  imageContainer : {
    justifyContent :'center'
  },
  image: {
    height: spacing.value(80),
    width :  spacing.value(80),
    borderRadius : spacing[6],
  },
});
export default BannerComponent;

import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {gray, primary, white} from '../../theme/colors';
import Wrapper from '../../components/wrapper /component';
import TextComponent from '../../components/text/component';
import {text} from '../../theme/size';
import {spacing} from '../../theme/spacing';
import InputComponent from '../../components/input/component';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <Wrapper
      statusbar={{
        backgroundColor: primary[900],
        barStyle: 'light-content',
      }}>
      <View style={styles.container}>
        <View>
          <TextComponent color={white[900]} size={text.xxl}>
            Hey, Rahul
          </TextComponent>
          <InputComponent
            placeholder="Search Products or store"
            style={styles.input}
            icon={
              <AntDesign name="search1" size={spacing[18]} color={white[900]} />
            }
          />
        </View>
        <View style={styles.row}>
          <InfoBar subTitle="DELIVERY TO" title="Green Way 3000, Sylhet" />
          <InfoBar subTitle="WITHIN" title="1 Hour" />
        </View>
      </View>
    </Wrapper>
  );
};

interface InfoBarProps {
  subTitle: string;
  title: string;
}

const InfoBar = ({subTitle, title}: InfoBarProps) => (
  <View>
    <TextComponent color={gray[100]} size={text.s}>
      {subTitle}
    </TextComponent>
    <View style={styles.rowG}>
      <TextComponent color={white[900]}>{title}</TextComponent>
      <AntDesign name="down" size={spacing[16]} color={white[900]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary[900],
    flex: 0.3,
    paddingHorizontal: spacing[20],
    justifyContent: 'space-between',
    paddingBottom: spacing[20],
  },
  input: {
    marginVertical: spacing[30],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowG: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: spacing[8],
  },
});

export default HomeScreen;

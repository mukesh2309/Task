import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {gray, primary, white} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import TextComponent from '../../components/text/component';
import InputComponent from '../../components/input/component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {text} from '../../theme/size';

interface InfoBarProps {
  subTitle: string;
  title: string;
}
interface HomeViewProps {
  user: {
    name: string;
  };
  onSearch: () => any;
  address: InfoBarProps;
  time: InfoBarProps;
}

const HomeView = ({user, onSearch, address, time}: HomeViewProps) => {
  return (
    <View style={styles.container}>
      <View>
        <TextComponent color={white[900]} size={text.xxl}>
          {user.name}
        </TextComponent>
        <InputComponent
          onChange={onSearch}
          placeholder="Search Products or store"
          style={styles.input}
          color={white[900]}
          icon={
            <AntDesign name="search1" size={spacing[18]} color={white[900]} />
          }
        />
      </View>
      <View style={styles.row}>
        <InfoBar subTitle={address.subTitle} title={address.title} />
        <InfoBar subTitle={time.subTitle} title={time.subTitle} />
      </View>
    </View>
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
      <AntDesign name="down" size={spacing[14]} color={white[900]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary[900],
    flex: 0.27,
    paddingHorizontal: spacing[20],
    justifyContent: 'space-between',
    paddingBottom: spacing[20],
    paddingTop: spacing[8],
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

export default HomeView;

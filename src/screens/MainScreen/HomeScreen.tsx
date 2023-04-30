import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '../../hooks';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/Variables';
import { ICONS } from '../../constant';

import { IPart } from '../../types';
import { Lessions } from './components/HomeComponent';
import { useGetListPart } from '../../api/part/queries';

export interface IHomeScreenProps {}

const HeadContainer = ({ Layout, Fonts }: any) => {
  return (
    <LinearGradient
      colors={['#856aff', '#694bff']}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.headContainer}
    >
      <View style={styles.headInfo}>
        <View style={{ ...Layout.rowHCenter }}>
          <Image source={ICONS.USACircle} style={styles.headInfoIcon} />
          <Text
            style={{
              ...Fonts.textRegular,
              color: Colors.white,
            }}
          >
            EN
          </Text>
        </View>
        <View style={{ ...Layout.rowHCenter }}>
          <Image source={ICONS.Fire} style={styles.headInfoIcon} />
          <Text
            style={{
              ...Fonts.textRegular,
              color: Colors.white,
            }}
          >
            4
          </Text>
        </View>
        <View style={{ ...Layout.rowHCenter }}>
          <Image source={ICONS.Diamond} style={styles.headInfoIcon} />
          <Text
            style={{
              ...Fonts.textRegular,
              color: Colors.white,
            }}
          >
            957
          </Text>
        </View>
        <View style={{ ...Layout.rowHCenter }}>
          <Image source={ICONS.StarExp} style={styles.headInfoIcon} />
        </View>
      </View>
    </LinearGradient>
  );
};

export function HomeScreen(props: IHomeScreenProps) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();
  const { data, isLoading } = useGetListPart({}, {});
  const parts = data || [];
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View
        style={{
          ...Layout.fill,
          ...styles.container,
        }}
      >
        <HeadContainer Layout={Layout} Fonts={Fonts} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            ...Layout.fill,
          }}
        >
          {parts.map(p => (
            <Lessions key={p.id} part={p} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  headContainer: {
    width: '100%',
    height: '11%',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  headInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '3%',
    paddingHorizontal: '5%',
  },
  headInfoIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});

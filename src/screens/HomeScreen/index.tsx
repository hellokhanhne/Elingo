import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/common/Button';
import { ToolTip } from '../../components/common/ToolTip';
import { IMAGES } from '../../constant';
import { useTheme } from '../../hooks';

export interface IHomeScreenProps {}

export function HomeScreen(props: IHomeScreenProps) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();
  return (
    <View
      style={{
        ...Layout.fill,
        ...styles.container,
      }}
    >
      <Text>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '10%',
  },
});

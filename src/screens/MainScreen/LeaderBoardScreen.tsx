import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';

export interface ILeaderBoardScreenProps {}

export function LeaderBoardScreen(props: ILeaderBoardScreenProps) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={'#856aff'} hidden={true} />
      <View
        style={{
          ...Layout.fill,
          ...styles.container,
        }}
      >
        <Text>Home screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: '10%',
  },
});

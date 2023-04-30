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
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View
        style={{
          ...Layout.fill,
          ...styles.container,
        }}
      >
        <Text>LeaderBoard screen</Text>
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

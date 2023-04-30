import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';

export interface IAccountScreenProps {}

export function AccountScreen(props: IAccountScreenProps) {
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
        <Text>Account Screen</Text>
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

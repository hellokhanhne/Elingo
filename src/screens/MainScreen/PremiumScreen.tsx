import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';

export interface IPremiumScreenProps {}

export function PremiumScreen(props: IPremiumScreenProps) {
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
        <Text>Premium screen</Text>
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

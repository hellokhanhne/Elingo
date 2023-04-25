import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Image, StyleSheet, View } from 'react-native';

import { ICONS, IMAGES } from '../../constant';
import { useTheme } from '../../hooks';

const SplashScreen = () => {
  const { Fonts, Layout } = useTheme();
  const navigate = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate.navigate('WelcomeScreen' as never);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          ...Layout.center,
          ...Layout.fill,
        }}
      >
        <Image style={styles.images} source={IMAGES.Splash} />
        <Text
          style={{
            ...Fonts.titleRegular,
            ...Fonts.textSemiBold,
            marginTop: 5,
          }}
        >
          Elingo
        </Text>
      </View>

      <View
        style={{
          height: '30%',
          ...Layout.center,
        }}
      >
        <Image style={styles.loading} source={ICONS.Loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  images: {
    width: 200,
    height: 200,
  },
  loading: {
    width: 100,
    height: 100,
  },
});

SplashScreen.NoNavigate = () => {
  const { Fonts, Layout } = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={{
          ...Layout.center,
          ...Layout.fill,
        }}
      >
        <Image style={styles.images} source={IMAGES.Splash} />
        <Text
          style={{
            ...Fonts.titleRegular,
            ...Fonts.textSemiBold,
            marginTop: 5,
          }}
        >
          Elingo
        </Text>
      </View>

      <View
        style={{
          height: '30%',
          ...Layout.center,
        }}
      >
        <Image style={styles.loading} source={ICONS.Loading} />
      </View>
    </View>
  );
};

export default SplashScreen;

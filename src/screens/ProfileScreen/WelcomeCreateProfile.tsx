import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Animated, Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/common/Button';
import { ToolTip } from '../../components/common/ToolTip';
import { IMAGES } from '../../constant';
import { useTheme } from '../../hooks';

export interface IWelcomeCreateProfileScreenProps {}

export function WelcomeCreateProfileScreen(
  props: IWelcomeCreateProfileScreenProps,
) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();

  const transformY = React.useRef(new Animated.Value(100)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  // console.log(opacity);

  const transformAction = () => {
    Animated.parallel([
      Animated.timing(transformY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  React.useEffect(() => {
    transformAction();
  });

  return (
    <View
      style={{
        ...Layout.fill,
        ...styles.container,
      }}
    >
      <View
        style={{
          ...Layout.fill,
        }}
      >
        <View
          style={{
            ...Layout.center,
          }}
        >
          <ToolTip arrow="bottom" text={'Tuyệt vời !!!'}></ToolTip>
          <Animated.Image
            resizeMode="contain"
            style={{
              ...styles.image,
              opacity: opacity,
              transform: [
                {
                  translateY: transformY,
                },
              ],
            }}
            source={IMAGES.CreateProfileWelcome}
          />

          <Text
            style={{
              ...Fonts.textGray,
              ...Fonts.textCenter,
              maxWidth: '85%',
              marginTop: 20,
              fontSize: 18,
              paddingTop: '2%',
              paddingHorizontal: '10%',
            }}
          >
            Tạo tài khoản ngay bây giờ bạn có thể bắt đầu quá trình học ngôn
            ngữ.
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.bottomContainer,
        }}
      >
        <Button
          onPress={() => {
            navigate.navigate('Register' as never);
          }}
          text="Tạo tài khoản"
        />
        <Button
          onPress={() => navigate.navigate('Login' as never)}
          text="Bỏ qua"
          type="light"
          containerStyle={{
            marginTop: 17.5,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '10%',
  },
  image: {
    width: 250,
    height: 220,
    marginTop: 30,
  },
  bottomContainer: {
    borderTopColor: '#f5f5f5',
    borderTopWidth: 1,
    marginBottom: Platform.OS === 'ios' ? 10 : 25,
    paddingHorizontal: '7.5%',
    paddingTop: 20,
  },
});

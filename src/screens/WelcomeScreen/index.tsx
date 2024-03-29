import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/common/Button';
import { ToolTip } from '../../components/common/ToolTip';
import { IMAGES } from '../../constant';
import { useTheme } from '../../hooks';

export interface IWelcomeScreenProps {}

export function WelcomeScreen(props: IWelcomeScreenProps) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();
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
          <ToolTip arrow="bottom" text={'Chào bạn. Tớ là Elingo !!!'}></ToolTip>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={IMAGES.Welcome}
          />
          <Text
            style={{
              ...Fonts.titleRegular,
              ...Fonts.textSemiBold,
              ...Fonts.textPrimary,
              marginTop: 20,
            }}
          >
            Elingo
          </Text>
          <Text
            style={{
              ...Fonts.textGray,
              ...Fonts.textCenter,
              maxWidth: '85%',
              marginTop: 20,
              fontSize: 18,
            }}
          >
            Học ngôn ngữ bất cứ nơi nào, bất cứ khi nào bạn muốn. Cùng bắt đầu
            ngay.
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
            navigate.navigate('StartSurveyScreen' as never);
          }}
          text="Bắt đầu ngay"
        />
        <Button
          onPress={() => {
            navigate.navigate('Login' as never);
          }}
          text="Tôi đã có tài khoản"
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
    width: 220,
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

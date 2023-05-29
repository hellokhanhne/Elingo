import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Button } from '../../components/common/Button';
import { ICONS, IMAGES } from '../../constant';
import { useTheme } from '../../hooks';
import { Text } from 'react-native';
import tailwind from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';

export interface ILessionCompleteProps {}

export function LessionComplete(props: ILessionCompleteProps) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
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
            <Text
              style={tailwind`font-semibold text-[24px] text-[${Colors.primary}]`}
            >
              Hoàn thành bài học !!!
            </Text>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={IMAGES.FunPay}
            />
          </View>
          <View style={tailwind`px-5 mt-10`}>
            <LinearGradient
              colors={['#4a85fe', '#2a70fe']}
              start={{ x: 0.1, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={tailwind`items-center rounded-xl`}
            >
              <Text
                style={tailwind`mt-4 mb-4 text-white font-semibold text-[20px]`}
              >
                Kim cương nhận được
              </Text>
              <View
                style={tailwind`bg-white py-5 flex-row justify-center items-center w-[98.5%]  mb-[0.75%] rounded-b-xl`}
              >
                <Image
                  source={ICONS.Diamond}
                  style={tailwind`w-[35px] h-[35px] mr-3`}
                />
                <Text style={tailwind`font-semibold text-[26px] text-black`}>
                  12
                </Text>
              </View>
            </LinearGradient>

            <View style={tailwind`flex-row gap-4 mt-7`}>
              <LinearGradient
                colors={['#ffa82f', '#fc980a']}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tailwind`items-center rounded-xl flex-1`}
              >
                <Text
                  style={tailwind`mt-4 mb-4 text-white font-semibold text-[16px]`}
                >
                  Tổng EXP
                </Text>
                <View
                  style={tailwind`bg-white py-5 flex-row justify-center items-center w-[97.5%]  mb-[1.75%] rounded-b-xl`}
                >
                  <Image
                    source={ICONS.Energy}
                    style={tailwind`w-[22px] h-[22px] mr-3`}
                  />
                  <Text style={tailwind`font-semibold text-[18px] text-black`}>
                    24
                  </Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#65e1b6', '#1dd494']}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tailwind`items-center rounded-xl flex-1`}
              >
                <Text
                  style={tailwind`mt-4 mb-4 text-white font-semibold text-[16px]`}
                >
                  Thời gian
                </Text>
                <View
                  style={tailwind`bg-white py-5 flex-row justify-center items-center w-[97.5%]  mb-[1.75%] rounded-b-xl`}
                >
                  <Image
                    source={ICONS.Clock}
                    style={tailwind`w-[22px] h-[22px] mr-3`}
                  />
                  <Text style={tailwind`font-semibold text-[18px] text-black`}>
                    1:45
                  </Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#ff8594', '#ff6066']}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tailwind`items-center rounded-xl flex-1`}
              >
                <Text
                  style={tailwind`mt-4 mb-4 text-white font-semibold text-[16px]`}
                >
                  Đúng
                </Text>
                <View
                  style={tailwind`bg-white py-5 flex-row justify-center items-center w-[97.5%]  mb-[1.75%] rounded-b-xl`}
                >
                  <Image
                    source={ICONS.Target}
                    style={tailwind`w-[22px] h-[22px] mr-3`}
                  />
                  <Text style={tailwind`font-semibold text-[18px] text-black`}>
                    87%
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.bottomContainer,
          }}
        >
          <Button
            onPress={() => {
              navigate.navigate(
                'Main' as never,
                {
                  screen: 'Home',
                } as never,
              );
            }}
            text="Tiếp tục"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '20%',
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

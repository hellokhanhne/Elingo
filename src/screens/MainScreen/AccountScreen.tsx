import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tailwind from 'twrnc';
import { Button } from '../../components/common/Button';
import DevideLine from '../../components/common/DevideLine';
import { ICONS } from '../../constant';
import { useTheme, useUser } from '../../hooks';
import { Colors } from '../../theme/Variables';
import { LineChart } from 'react-native-gifted-charts';

export interface IAccountScreenProps {}

const data = [
  {
    title: 'Thử thách',
    val: '127',
    icon: ICONS.Fire,
  },
  {
    title: 'Bài học đã làm',
    val: '458',
    icon: ICONS.Calendar,
  },
  {
    title: 'Tổng kim cương',
    val: '957',
    icon: ICONS.Diamond,
  },
  {
    title: 'Kinh nghiệm',
    val: '15,274',
    icon: ICONS.Energy,
  },
  {
    title: 'Thực hành đúng',
    val: '298',
    icon: ICONS.Target,
  },

  {
    title: 'Top 3 xếp hạng',
    val: '36',
    icon: ICONS.Top,
    tinColor: '#feba2c',
  },
];

export function AccountScreen(props: IAccountScreenProps) {
  const { Layout, Fonts, FontSize } = useTheme();
  const navigation = useNavigation();
  const user = useUser();

  const lineData = [
    { value: 224 },
    { value: 142 },
    { value: 212 },
    { value: 59 },
    { value: 79 },
    { value: 68 },
    { value: 93 },
  ];

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            ...Layout.fill,
            paddingTop: '10%',
          }}
        >
          <View
            style={{
              ...Layout.rowHCenter,
            }}
          >
            <Image
              source={ICONS.Logo}
              style={{
                ...styles.icon,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                ...Fonts.textBlack,
                ...tailwind`font-semibold`,
                fontSize: FontSize.regular,
              }}
            >
              Tài khoản
            </Text>
            <View
              style={{
                ...Layout.fill,
                ...Layout.alignItemsEnd,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingScreen' as never)}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  source={ICONS.Setting}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tailwind`items-center mt-8 mb-5`}>
            <View style={tailwind`w-[90px] h-[90px] rounded-full relative`}>
              <Image
                style={tailwind`w-full h-full rounded-full`}
                source={{
                  uri: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-dai-dien-avt-anime-1-600x600.jpg',
                }}
              />
              <TouchableOpacity
                style={tailwind`absolute bottom-[5px] right-0 w-[25px] h-[20px] rounded items-center justify-center bg-[${Colors.primary}]`}
              >
                <Image
                  source={ICONS.Pencil}
                  resizeMode="contain"
                  style={[
                    tailwind`w-[12x] h-[12px]`,
                    {
                      tintColor: Colors.white,
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={tailwind`font-semibold text-[24px] text-black mt-4 mb-3`}
            >
              {user?.fullname}
            </Text>
            <Text>Đã tham gia từ 20 - 6 - 2020</Text>
          </View>

          <DevideLine />

          <View style={tailwind`flex-row  mt-2`}>
            <View
              style={{
                ...tailwind` h-full flex-1 items-center py-1`,
                ...styles.border,
              }}
            >
              <Text style={tailwind`font-semibold text-[18px] text-black mb-2`}>
                1,536
              </Text>
              <Text>Người theo dõi</Text>
            </View>
            <View
              style={{
                ...tailwind` h-full flex-1 items-center py-1`,
                ...styles.border,
              }}
            >
              <Text style={tailwind`font-semibold text-[18px] text-black mb-2`}>
                1,536
              </Text>
              <Text>Đang theo dõi</Text>
            </View>
            <View style={{ ...tailwind` h-full flex-1 items-center py-1` }}>
              <Text style={tailwind`font-semibold text-[18px] text-black mb-2`}>
                1,536
              </Text>
              <Text>Số lượng exp</Text>
            </View>
          </View>

          <View style={tailwind`flex-row mt-6 gap-5`}>
            <Button
              containerStyle={tailwind`flex-1 h-[42.5px] flex-row items-center`}
              textStyles={tailwind`normal-case`}
              text="Chỉnh sửa"
              type="filled"
              shadownShown={false}
              leftComponent={
                <Image
                  style={[tailwind`w-4 h-4 mr-2`, { tintColor: Colors.white }]}
                  source={ICONS.Pencil}
                />
              }
            />
            <Button
              containerStyle={tailwind`flex-1 h-[42.5px] flex-row items-center`}
              textStyles={tailwind`normal-case`}
              text="Nhắn tin"
              type="outlined"
              shadownShown={false}
              leftComponent={
                <Image
                  style={[
                    tailwind`w-[18px] h-[18px] mr-2`,
                    { tintColor: Colors.primary },
                  ]}
                  source={ICONS.Chat}
                />
              }
            />
          </View>

          <View style={tailwind`mt-7`}>
            <Text style={tailwind`font-semibold text-[20px] text-black mb-5`}>
              Bảng thống kê của bạn
            </Text>
            <View
              style={tailwind` flex-row flex-wrap justify-between gap-y-5 `}
            >
              {data.map(d => (
                <View
                  style={tailwind`rounded-xl px-3 w-[47%] py-3  flex-row  border border-[${Colors.lightGray}]`}
                >
                  <Image
                    source={d.icon}
                    style={[
                      tailwind`w-[30px] h-[30px] mr-2 `,
                      (d as any)?.tinColor && {
                        tintColor: '#feba2c',
                      },
                    ]}
                  />
                  <View style={tailwind`flex-1`}>
                    <Text
                      style={tailwind`font-semibold text-[16px] text-black mb-3`}
                    >
                      {d.val}
                    </Text>
                    <Text>{d.title}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View
            style={tailwind`mt-5 mb-16 border border-[${Colors.lightGray}] px-5 py-4 rounded-xl`}
          >
            <View style={tailwind`flex-row justify-between items-center mb-4`}>
              <Text style={tailwind`font-semibold text-[18px] text-black`}>
                Kinh nghiệm (EXP) tuần này
              </Text>
              <Text style={tailwind`font-[16px]`}>872 EXP</Text>
            </View>
            <DevideLine />

            <View style={tailwind`mt-5 mb-3`}>
              <LineChart
                areaChart
                curved
                isAnimated={true}
                height={300}
                data={lineData as any}
                spacing={39}
                width={260}
                initialSpacing={20}
                color1={Colors.primary}
                hideDataPoints
                startFillColor1="#e4deff"
                startFillColor2="#f3f0ff"
                xAxisLabelTexts={[
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun',
                ]}
                yAxisColor={'transparent'}
                xAxisColor={'transparent'}
                hideRules={true}
                startOpacity={0.8}
                endOpacity={0.4}
                thickness={2}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    paddingHorizontal: '5%',
  },
  icon: {
    width: 25,
    height: 25,
  },
  border: {
    borderRightWidth: 1,
    borderColor: Colors.lightGray,
  },
});

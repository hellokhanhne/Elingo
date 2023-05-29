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
import { useTheme } from '../../hooks';
import tailwind from 'twrnc';
import { ICONS } from '../../constant';
import Tab from '../../components/common/Tab';
import BackWithPercentIndicator from '../../components/common/BackWithPercentIndicator';

export interface IChallengeScreenProps {}

const tabs = [
  {
    name: 'Mục tiêu',
  },
  {
    name: 'Các danh hiệu',
  },
];

const missions = [
  {
    title: 'Kiếm được 25 kim cương',
    icon: ICONS.Diamond,
    percent: 20,
    status: '12/25',
  },
  {
    title: 'Kiếm được 40 exp',
    icon: ICONS.Energy,
    percent: 40,
    status: '4/20',
  },
  {
    title: 'Hoàn thành 2 bài học',
    icon: ICONS.Target,
    percent: 30,
    status: '2/9',
  },
  {
    title: 'Hoàn thành một thử thách',
    icon: ICONS.Fire,
    percent: 100,
    status: '1/1',
  },
];

export function ChallengeScreen(props: IChallengeScreenProps) {
  const { Layout, Fonts, Colors, FontSize } = useTheme();
  const navigate = useNavigation();
  const [active, setActive] = React.useState('Mục tiêu');

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
              fontWeight: '800',
              fontSize: FontSize.regular,
            }}
          >
            Thử thách
          </Text>
          <View
            style={{
              ...Layout.fill,
              ...Layout.alignItemsEnd,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={ICONS.Info}
            />
          </View>
        </View>

        {/* tabs */}

        <View style={tailwind`flex-row gap-3 mt-6 `}>
          {tabs.map(tab => (
            <Tab
              key={tab.name}
              onClick={() => setActive(tab.name)}
              text={tab.name}
              active={tab.name === active}
            />
          ))}
        </View>

        <View style={tailwind`flex-row justify-between items-center mt-8`}>
          <View style={tailwind`flex-row items-center`}>
            <Text style={tailwind`font-semibold text-black  text-[18px] mr-1`}>
              Nhiệm vụ hàng ngày
            </Text>
            <Image source={ICONS.Target} style={tailwind`w-4 h-4`} />
          </View>
          <Image
            source={ICONS.RightArrow}
            style={[
              tailwind`w-6 h-4`,
              {
                tintColor: Colors.primary,
              },
            ]}
          />
        </View>

        <ScrollView style={tailwind`flex-1 mt-8`}>
          <View style={tailwind``}>
            {missions.map((m, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={tailwind`py-6 px-5 w-full flex-row items-center  border mb-7 border-[#eeeeee] rounded-[16px]`}
                >
                  <Image
                    source={m.icon}
                    style={tailwind`w-[50px] h-[50px] mr-5`}
                  />
                  <View style={[tailwind`flex-1`]}>
                    <Text
                      style={tailwind`mb-1 font-semibold text-black text-[16px]`}
                    >
                      {m.title}
                    </Text>
                    <View style={[tailwind`flex-row items-center w-full`]}>
                      <BackWithPercentIndicator
                        containerStyle={{
                          flex: 1,
                          paddingHorizontal: 0,
                        }}
                        percentStyle={{
                          marginLeft: 0,
                        }}
                        percent={20}
                        isShowBack={false}
                      />
                      <Text style={tailwind` text-[${Colors.primary}] ml-3`}>
                        {m.status}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '12%',
    paddingHorizontal: '5%',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

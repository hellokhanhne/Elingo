import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme, useUser } from '../../hooks';
import { FontSize } from '../../theme/Variables';
import { ICONS } from '../../constant';
import Tab from '../../components/common/Tab';
import tailwind from 'twrnc';
import DATASET from '../../constant/data';
import DevideLine from '../../components/common/DevideLine';
import { useGetListUsers } from '../../api/user/queries';
import { IUser } from '../../store/auth';
import { RANDOM_IMAGE_URL } from '../../utils/randomImage';

export interface ILeaderBoardScreenProps {}

const tabs = [
  {
    name: 'Theo tuần',
  },
  {
    name: 'Theo tháng',
  },
  {
    name: 'Bạn bè',
  },
];

export function LeaderBoardScreen(props: ILeaderBoardScreenProps) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();
  const [active, setActive] = useState('Theo tuần');

  const user = useUser();

  const { data } = useGetListUsers({});

  const dataRender = useMemo(() => {
    return data?.filter(u => u.id !== user?.id);
  }, [data]);

  const handleClickUser = (user: IUser) => {
    if (user.id) {
      navigate.navigate(
        'UserProfileScreen' as never,
        {
          user: user,
        } as never,
      );
    }
  };

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
            Bảng xếp hạng
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
              source={ICONS.search}
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

        <FlatList
          style={tailwind`flex-1 mt-6`}
          data={
            active === 'Bạn bè'
              ? (dataRender as any[])
              : DATASET.leaderboards.results
          }
          renderItem={({ item, index }) => {
            let colors;
            if (index === 0) colors = ['#ffc02d', 'text-white'];
            else if (index === 1) colors = ['#b2c0db', 'text-white'];
            else if (index === 2) colors = ['#d79961', 'text-white'];
            else {
              colors = ['bg-white', 'text-gray'];
            }

            return (
              <TouchableOpacity
                style={tailwind`flex-row items-center py-4`}
                onPress={() => handleClickUser(item)}
              >
                {index > 2 && (
                  <View
                    style={tailwind`w-[40px] h-[40px] items-center justify-center ${colors[0]} rounded-full`}
                  >
                    <Text
                      style={tailwind`${colors[1]} font-semibold text-[16px]`}
                    >
                      {index + 1}
                    </Text>
                  </View>
                )}
                {index < 3 && (
                  <View
                    style={tailwind`w-[40px] h-[40px] items-center justify-center relative`}
                  >
                    <Image
                      source={ICONS.Top}
                      style={[
                        tailwind`w-full h-full`,
                        {
                          tintColor: colors[0],
                        },
                      ]}
                      resizeMode="contain"
                    />
                    <Text
                      style={tailwind`${colors[1]} absolute top-[4px] font-semibold text-[16px]`}
                    >
                      {index + 1}
                    </Text>
                  </View>
                )}
                <Image
                  style={tailwind`w-[55px] h-[55px] rounded-full ml-4`}
                  source={{
                    uri:
                      item.avatar?.url ||
                      item?.picture?.large ||
                      RANDOM_IMAGE_URL,
                  }}
                />
                <View
                  style={tailwind`flex-row items-center flex-1 justify-between`}
                >
                  <Text
                    style={tailwind` ml-6 font-semibold text-gray-600 text-[17px]`}
                  >
                    {item.fullname || item?.name.first + ' ' + item?.name.last}
                  </Text>
                  <Text style={tailwind`text-black font-medium mt-[2px]`}>
                    {`${(item.id ? 1100 : 5000) - (index + 1) * 110}`} XP
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.email || item?.login.uuid}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <DevideLine />}
        />
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

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import * as React from 'react';
import {
  FlatList,
  Image,
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
import { useTheme } from '../../hooks';
import { AuthAction } from '../../store/auth';
import { useAppDispatch } from '../../hooks/store';
import { useNavigation } from '@react-navigation/native';
import { useChatContext } from '../../context/ChatContext';

interface ISettingScreenProps {}

const data = [
  {
    title: 'Thông tin cá nhân',
    icon: ICONS.Person,
    href: '',
    color: '#FD9E1B',
  },
  {
    title: 'Gói cao cấp ( premium )',
    icon: ICONS.Star,
    href: 'premiumScreen',
    color: '#7c5fff',
  },
  // {
  //   title: 'Chung',
  //   icon: ICONS.Menu,
  //   href: '',
  //   color: '#7c5fff',
  // },
  {
    title: 'Truy cập',
    icon: ICONS.Compass,
    href: '',
    color: '#fd9c14',
  },
  {
    title: 'Thông báo',
    icon: ICONS.Bell,
    href: '',
    color: '#ff7884',
  },
  {
    title: 'Bảo mật',
    icon: ICONS.Secure,
    href: '',
    color: '#31d79d',
  },
  {
    title: 'Tìm bạn bè',
    icon: ICONS.Users,
    href: '',
    color: '#fda62c',
  },
  {
    title: 'Trung tâm trợ giúp',
    icon: ICONS.Document,
    href: '',
    color: '#5cdfb1',
  },
  {
    title: 'Về Elingo',
    icon: ICONS.InfoCircle,
    href: '',
    color: '#7254ff',
  },
  {
    title: 'Đăng xuất',
    icon: ICONS.Logout,
    href: '',
    color: '#ff7681',
  },
];

const SettingScreen: React.FunctionComponent<ISettingScreenProps> = props => {
  const { Layout } = useTheme();

  const { chatClient } = useChatContext();

  const navigation = useNavigation();

  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => ['30%', '32%'], []);
  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    await chatClient.disconnectUser();
    dispatch(AuthAction.logout({}));
  };

  return (
    <>
      <BottomSheetModalProvider>
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
          <View style={tailwind`flex-row items-center`}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={ICONS.Back}
                style={tailwind`w-[30px] h-[30px] mr-3`}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={tailwind`font-semibold text-black text-[20px]`}>
              Cài đặt
            </Text>
          </View>

          <FlatList
            data={data}
            style={tailwind`mt-5`}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={tailwind`flex-row items-center py-3`}
                onPress={() => {
                  if (item.href) {
                    navigation.navigate('premium' as never);
                  } else {
                    handlePresentModalPress();
                  }
                }}
              >
                <View
                  style={[
                    tailwind`w-[50px] h-[50px] flex-row items-center relative  rounded-full justify-center mr-4 `,
                  ]}
                >
                  <View
                    style={[
                      tailwind`absolute inset-0 bg-[${item.color}] opacity-9 rounded-full`,
                    ]}
                  ></View>
                  <Image
                    resizeMode="contain"
                    source={item.icon}
                    style={[
                      tailwind`w-[20px] h-20px relative`,
                      {
                        tintColor: `${item.color}`,
                        zIndex: 1,
                      },
                    ]}
                  />
                </View>
                <Text
                  style={tailwind`font-semibold text-[18px] text-[#414141]`}
                >
                  {' '}
                  {item.title}
                </Text>
                {index !== data.length - 1 && (
                  <View style={tailwind`flex-1 items-end`}>
                    <Image
                      source={ICONS.RightArrow2}
                      style={tailwind`w-[20px] h-20px`}
                    />
                  </View>
                )}
              </TouchableOpacity>
            )}
            keyExtractor={(_, index) => `${index}-setting`}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text
              style={tailwind`text-[#ff7681] font-semibold text-[24px] mt-4 mb-6`}
            >
              Đăng xuất
            </Text>
            <DevideLine />
            <Text
              style={tailwind`mt-5 mb-5 text-[16px] font-semibold text-[#414141]`}
            >
              Bạn có chắc chắn muốn đăng xuất ?
            </Text>
            <View style={tailwind`flex-row mt-6 gap-5`}>
              <Button
                containerStyle={tailwind`flex-1 h-[42.5px] flex-row items-center`}
                textStyles={tailwind`normal-case`}
                text="Đóng"
                type="light"
                shadownShown={false}
                onPress={handleCloseModalPress}
              />
              <Button
                containerStyle={tailwind`flex-1 h-[42.5px] flex-row items-center`}
                textStyles={tailwind`normal-case`}
                text="Đăng xuất"
                type="filled"
                onPress={handleLogOut}
              />
            </View>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingTop: '10%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default SettingScreen;

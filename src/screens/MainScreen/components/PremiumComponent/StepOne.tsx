import * as React from 'react';

interface IStepOneProps {}

import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import tailwind from 'twrnc';
import DevideLine from '../../../../components/common/DevideLine';
import { ICONS, IMAGES } from '../../../../constant';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    title: 'Không giới hạn kim cương',
    icon: ICONS.Diamond,
    text: 'Không giới hạn kim cương để giúp quá trình học dễ hơn.',
  },
  {
    title: 'Nhắc nhở',
    icon: ICONS.Clock,
    text: 'Với tính năng nhắc nhở, bạn sẽ không bỏ lỡ những bài học.',
  },
  {
    title: 'Lịch học',
    icon: ICONS.Calendar,
    text: 'Tính năng lịch học sẽ làm cho việc học có tổ chức hơn.',
  },
  {
    title: 'Nhận exp',
    icon: ICONS.Energy,
    text: 'Nhận nhiều exp hơn với gói cao cấp',
  },
  {
    title: 'Học trên sách',
    icon: ICONS.Book_2,
    text: 'Miễn phí hàng trăm cuốn sách về tiếng anh.',
  },
  {
    title: 'Học tốt hơn',
    icon: ICONS.StarExp,
    text: 'Truy cập nhiều bài học chất lượng cao.',
  },
  {
    title: 'Không thời gian chờ',
    icon: ICONS.HourGlass,
    text: 'Học nhanh hơn, không thời gian chờ, chậm trễ.',
  },
  {
    title: 'Không quảng cáo',
    icon: ICONS.NoAds,
    text: 'Không có quảng cáo với gói elingo cao cấp.',
  },
];

const StepOne: React.FunctionComponent<IStepOneProps> = props => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={tailwind`flex-row items-center`}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={ICONS.Back}
            style={[
              tailwind`w-8 h-8 mr-4 `,
              {
                tintColor: Colors.white,
              },
            ]}
          />
        </TouchableOpacity>
        <Text style={tailwind`font-semibold text-white text-[20px]`}>
          Gói cao cấp
        </Text>
      </View>
      <View
        style={tailwind`flex-row px-3 py-3 items-center bg-white rounded-xl gap-2 mt-[7%]`}
      >
        <Image
          source={IMAGES.Cool}
          style={tailwind`w-[50%] h-[150px]`}
          resizeMode="contain"
        />
        <View style={tailwind`flex-1 justify-center`}>
          <Text style={tailwind` mb-2 font-semibold text-[18px] text-black `}>
            Tốt hơn &
          </Text>
          <Text style={tailwind` mb-2 font-semibold text-[18px] text-black `}>
            học nhanh hơn
          </Text>
          <Text style={tailwind` mb-2 font-semibold text-[18px] text-black `}>
            lên tới 5 lần
          </Text>
          <Text style={tailwind` mb-2 font-semibold text-[18px] text-black `}>
            với gói cao cấp.
          </Text>
        </View>
      </View>

      <View style={tailwind`bg-white  px-7 mt-5 mb-20 rounded-xl `}>
        {data.map(item => {
          return (
            <View key={item.title}>
              <View style={tailwind`flex-row py-6`}>
                <Image
                  source={item.icon}
                  style={tailwind`w-[60px] h-[60px] mr-4`}
                  resizeMode="contain"
                />
                <View style={tailwind`flex-1`}>
                  <Text
                    style={tailwind`font-semibold text-[18px] text-black mb-2`}
                  >
                    {item.title}
                  </Text>
                  <Text style={tailwind`text-[16px]`}>{item.text}</Text>
                </View>
              </View>
              <DevideLine />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default StepOne;

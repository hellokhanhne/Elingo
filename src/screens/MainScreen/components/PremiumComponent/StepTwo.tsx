import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ICONS } from '../../../../constant';
import tailwind from 'twrnc';
import { Colors } from '../../../../theme/Variables';
import { useNavigation } from '@react-navigation/native';
import DevideLine from '../../../../components/common/DevideLine';
import { OptionCard } from '../../../../components/common/OptionCard';

interface IStepTwoProps {}

const data = [
  {
    title: 'Gói 1 tháng',
    price: '10.00',
  },
  {
    title: 'Gói 3 tháng',
    price: '26.00',
  },
  {
    title: 'Gói 6 tháng',
    price: '46.00',
  },
  {
    title: 'Gói 12 tháng',
    price: '86.00',
  },
];

const StepTwo: React.FunctionComponent<IStepTwoProps> = props => {
  const navigation = useNavigation();
  const [active, setActive] = React.useState(1);

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Main' as never, { screen: 'Home' } as never)
        }
      >
        <Image
          source={ICONS.Close}
          style={[
            tailwind`w-[15px] h-[15px]`,
            {
              tintColor: Colors.white,
            },
          ]}
        />
      </TouchableOpacity>
      <View style={tailwind`mt-10 bg-white rounded-xl py-4 px-5`}>
        <View style={tailwind`items-center mb-4`}>
          <Text style={tailwind`font-semibold text-black text-[20px]`}>
            Chọn một gói đăng kí
          </Text>
        </View>
        <DevideLine />
        <View style={tailwind`mt-5`}>
          {data.map((l, index) => (
            <OptionCard
              onClick={() => {
                setActive(index);
              }}
              key={l.price}
              wrappeTextStyle={{
                justifyContent: 'space-between',
              }}
              containerStyle={{
                marginBottom: 15,
                paddingVertical: 20,
              }}
              textStyle={{
                fontWeight: '600',
                fontSize: 16,
                marginLeft: 0,
                flex: 0,
              }}
              active={index === active}
              leftElement={
                <View>
                  <Text
                    style={tailwind`text-black font-semibold text-[18px] mb-2`}
                  >
                    {l.title}
                  </Text>
                  <Text style={tailwind``}>
                    Tiết kiệm tới {(index + 1) * 10}%
                  </Text>
                </View>
              }
              rightElement={
                <View>
                  <Text
                    style={tailwind`font-semibold text-[24px] text-[${Colors.primary}]`}
                  >
                    ${l.price}
                  </Text>
                </View>
              }
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default StepTwo;

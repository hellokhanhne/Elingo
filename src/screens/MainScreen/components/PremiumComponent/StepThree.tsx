import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICONS } from '../../../../constant';
import tailwind from 'twrnc';
import { Colors } from '../../../../theme/Variables';
import { useNavigation } from '@react-navigation/native';
import DevideLine from '../../../../components/common/DevideLine';
import { OptionCard } from '../../../../components/common/OptionCard';

interface IStepThreeProps {}

const data = [
  {
    title: 'Paypal',
    icon: ICONS.Paypal,
  },
  {
    title: 'Google Pay',
    icon: ICONS.Google,
  },
  {
    title: 'Apple Pay',
    icon: ICONS.ApplePay,
  },
  {
    title: '**** **** **** 4679',
    icon: ICONS.MasterCard,
  },
];

const StepThree: React.FunctionComponent<IStepThreeProps> = props => {
  const navigation = useNavigation();
  const [active, setActive] = React.useState(1);

  return (
    <View>
      <View style={tailwind`flex-row justify-between`}>
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
        <Image
          source={ICONS.Plus}
          style={[
            tailwind`w-[15px] h-[15px]`,
            {
              tintColor: Colors.white,
            },
          ]}
        />
      </View>
      <View style={tailwind`mt-10 bg-white rounded-xl py-4 px-5`}>
        <View style={tailwind`items-center mb-4`}>
          <Text style={tailwind`font-semibold text-black text-[20px]`}>
            Chọn phương thức thanh toán
          </Text>
        </View>
        <DevideLine />
        <View style={tailwind`mt-5 mb-1`}>
          {data.map((l, index) => (
            <OptionCard
              onClick={() => {
                setActive(index);
              }}
              key={index}
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
                <View style={tailwind`flex-row items-center`}>
                  <Image
                    style={tailwind`w-[45px] h-[45px] mr-4`}
                    source={l.icon}
                  />
                  <Text style={tailwind`text-black font-semibold text-[18px]`}>
                    {l.title}
                  </Text>
                </View>
              }
              rightElement={
                active === index ? (
                  <View
                    style={[
                      tailwind`w-[18px] h-[18px] rounded-full justify-center items-center`,
                      styles.option,
                    ]}
                  >
                    <View
                      style={tailwind`w-[10px] h-[10px] rounded-full bg-[${Colors.primary}]`}
                    ></View>
                  </View>
                ) : (
                  <View
                    style={[
                      tailwind`w-[18px] h-[18px] rounded-full`,
                      styles.option,
                    ]}
                  ></View>
                )
              }
            />
          ))}
        </View>
        <DevideLine />
        <View style={tailwind`items-center mt-4 py-2`}>
          <Text
            style={tailwind`text-[${Colors.primary}] font-semibold text-[16px]`}
          >
            Nhập mã khuyến mãi
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
});

export default StepThree;

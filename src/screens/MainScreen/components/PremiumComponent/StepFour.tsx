import React from 'react';
import { ToolTip } from '../../../../components/common/ToolTip';

import { IMAGES } from '../../../../constant';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../../../hooks';
import tailwind from 'twrnc';
import { Colors } from '../../../../theme/Variables';

interface IStepFourProps {}

const StepFour: React.FunctionComponent<IStepFourProps> = props => {
  const { Fonts } = useTheme();

  const transformY = React.useRef(new Animated.Value(50)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

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
    <>
      <View
        style={tailwind`px-8 py-8 bg-white rounded-xl mt-[15%] items-center`}
      >
        <ToolTip
          containerStyle={tailwind`min-w-[150px]`}
          arrow="bottom"
          text={'Yeaayy !!!'}
        ></ToolTip>
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
          source={IMAGES.FunPay}
        />

        <Text
          style={tailwind`text-[26px] text-[${Colors.primary}] font-semibold mt-5 mb-3`}
        >
          Thanh toán thành công !
        </Text>

        <Text
          style={{
            ...Fonts.textGray,
            fontSize: 18,
            paddingTop: '2%',
            paddingHorizontal: '10%',
            textAlign: 'center',
          }}
        >
          Bạn đã đăng kí thành công gói Elingo cao cấp. Bạn sẽ được nhắc nhở học
          tập, dùng các tính năng học cao cấp,... Hãy trải nghiệm nhé.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 220,
    marginTop: 15,
  },
});

export default StepFour;

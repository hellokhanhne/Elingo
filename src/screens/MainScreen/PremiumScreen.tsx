import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tailwind from 'twrnc';
import { Button } from '../../components/common/Button';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme/Variables';
import StepOne from './components/PremiumComponent/StepOne';
import StepTwo from './components/PremiumComponent/StepTwo';
import StepThree from './components/PremiumComponent/StepThree';
import StepFour from './components/PremiumComponent/StepFour';

export interface IPremiumScreenProps {}

export function PremiumScreen(props: IPremiumScreenProps) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();

  const [step, setStep] = React.useState(1);

  const handleNextStep = () => {
    if (step === 4) {
      setStep(1);
      navigate.navigate(
        'Main' as never,
        {
          screen: 'Home',
        } as never,
      );
      return;
    } else setStep(step + 1);
  };

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={['#856aff', '#7052ff']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={tailwind`flex-1`}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            ...Layout.fill,
            ...tailwind`px-[5%] pt-[12%]`,
          }}
        >
          {step == 1 && <StepOne />}
          {step == 2 && <StepTwo />}
          {step == 3 && <StepThree />}
          {step == 4 && <StepFour />}
        </ScrollView>

        <View style={tailwind``}>
          <View
            style={{
              ...styles.bottomContainer,
            }}
          >
            <View style={tailwind`px-[5%] mb-5 py-2`}>
              <Button
                onPress={handleNextStep}
                text={
                  step === 1
                    ? 'Đăng kí ngay'
                    : step === 2 || step === 4
                    ? 'Tiếp tục'
                    : 'Xác nhận thanh toán'
                }
              />
              {step === 1 && (
                <Button
                  onPress={handleBack}
                  text="Bỏ qua"
                  type="light"
                  containerStyle={{
                    marginTop: 17.5,
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    borderTopColor: '#efeeee',
    borderTopWidth: 1,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
});

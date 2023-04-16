import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BackWithPercentIndicator from '../../components/common/BackWithPercentIndicator';
import { Button } from '../../components/common/Button';
import DevideLine from '../../components/common/DevideLine';
import { ToolTip } from '../../components/common/ToolTip';

import { IMAGES } from '../../constant';
import { setCurrentStep, survaySelector } from '../../store/survay';

import StepContainer from './componens/StepContainer';

interface IStartSurvayScreenProps {}

const StartSurvayScreen: React.FunctionComponent<
  IStartSurvayScreenProps
> = props => {
  const { currentStep, stepTexts, survey } = useSelector(survaySelector);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleContinue = () => {
    if (currentStep === 6) {
      return navigate.navigate('WelcomeCreateProfileScreen' as never);
    }
    dispatch(setCurrentStep(currentStep + 1));
  };

  const handleBack = () => {
    if (currentStep === 1) {
      navigate.goBack();
    } else {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  let activeContinue = false;

  switch (currentStep) {
    case 1:
      if (survey?.appLanguage) {
        activeContinue = true;
      }
      break;
    case 2:
      if (survey?.learnLanguage) {
        activeContinue = true;
      }
      break;

    case 3:
      if (survey?.knowedBy) {
        activeContinue = true;
      }
      break;

    case 4:
      if (survey?.learnReasons) {
        activeContinue = true;
      }
      break;

    case 5:
      if (survey?.level) {
        activeContinue = true;
      }
      break;

    case 6:
      if (survey?.learnTarget) {
        activeContinue = true;
      }
      break;

    default:
      break;
  }

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <BackWithPercentIndicator
        onBack={handleBack}
        percent={(100 / 6) * currentStep}
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: '5%',
          marginTop: '8.5%',
        }}
      >
        <View>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={IMAGES.NormalGuilder}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: '5%',
          }}
        >
          <ToolTip
            containerStyle={{
              maxWidth: '95%',
            }}
            arrow="left"
            text={stepTexts[currentStep]}
          ></ToolTip>
        </View>
      </View>

      {/* devide line  */}
      <View style={styles.wrapperDevideLine}>
        <DevideLine />
      </View>

      {/* body content  */}

      <ScrollView
        style={styles.bodyContainer}
        showsVerticalScrollIndicator={false}
      >
        <StepContainer />
      </ScrollView>

      {/* bottom  */}
      <View style={styles.bottomContainer}>
        <Button
          type={activeContinue ? 'filled' : 'light'}
          active={activeContinue}
          text="Tiếp tục"
          onPress={handleContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: '2.5%',
    paddingBottom: '25%',
  },
  image: {
    width: 120,
    height: 120,
  },
  wrapperDevideLine: {
    paddingHorizontal: 15,
    marginVertical: 25,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: '8%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    borderTopColor: '#F5F5F5',
    borderTopWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: '10%',
  },
});

export default StartSurvayScreen;

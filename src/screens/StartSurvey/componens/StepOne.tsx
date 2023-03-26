import * as React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { OptionCard } from '../../../components/common/OptionCard';
import { ICONS, languages } from '../../../constant';
import { useTheme } from '../../../hooks';
import { setSurvay, survaySelector } from '../../../store/survay';

interface IStepOneProps {}

const StepOne = () => {
  const { Fonts } = useTheme();

  const { survey } = useSelector(survaySelector);

  const dispatch = useDispatch();
  return (
    <>
      <Text
        style={{
          ...Fonts.textSemiBold,
          ...Fonts.textRegular,
        }}
      >
        Ngôn ngữ của bạn
      </Text>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <OptionCard
          active={true}
          changeTextVisiable={true}
          icon={ICONS.Vietnam}
          title={'Việt Nam'}
        />
      </View>

      <Text
        style={{
          ...Fonts.textSemiBold,
          ...Fonts.textRegular,
          marginTop: 20,
        }}
      >
        Ngôn ngữ ứng dụng
      </Text>
      <View
        style={{
          marginTop: 15,
        }}
      >
        {languages.map((l, i) => (
          <OptionCard
            onClick={() =>
              dispatch(
                setSurvay({
                  appLanguage: l.name,
                }),
              )
            }
            key={l.name}
            containerStyle={{
              marginBottom: 10,
            }}
            active={survey?.appLanguage === l.name}
            icon={l.icon}
            title={l.name}
          />
        ))}
      </View>
    </>
  );
};

export default StepOne;

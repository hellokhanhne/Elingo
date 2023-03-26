import * as React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { OptionCard } from '../../../components/common/OptionCard';
import { targets } from '../../../constant';
import { useTheme } from '../../../hooks';
import { setSurvay, survaySelector } from '../../../store/survay';
import { FontSize } from '../../../theme/Variables';

interface IStepSixProps {}

const StepSix: React.FunctionComponent<IStepSixProps> = props => {
  const { Fonts } = useTheme();
  const { survey } = useSelector(survaySelector);

  const dispatch = useDispatch();

  return (
    <>
      <View>
        {targets.map(l => (
          <OptionCard
            onClick={() =>
              dispatch(
                setSurvay({
                  learnTarget: l.title,
                }),
              )
            }
            key={l.title}
            containerStyle={{
              marginBottom: 10,
              paddingVertical: 20,
            }}
            textStyle={{
              marginLeft: 0,
            }}
            active={survey?.learnTarget === l.title}
            title={l.title}
            rightElement={
              <Text
                style={{
                  ...Fonts.textGray,
                  fontSize: FontSize.small,
                  fontWeight: '500',
                }}
              >
                {l.desc}
              </Text>
            }
          />
        ))}
      </View>
    </>
  );
};

export default StepSix;

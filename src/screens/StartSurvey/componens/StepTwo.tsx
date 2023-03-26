import * as React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { OptionCard } from '../../../components/common/OptionCard';
import { languages } from '../../../constant';
import { setSurvay, survaySelector } from '../../../store/survay';

interface IStepTwoProps {}

const StepTwo: React.FunctionComponent<IStepTwoProps> = props => {
  const { survey } = useSelector(survaySelector);

  const dispatch = useDispatch();

  return (
    <>
      <View>
        {languages.map(l => (
          <OptionCard
            onClick={() =>
              dispatch(
                setSurvay({
                  learnLanguage: l.name,
                }),
              )
            }
            key={l.name}
            containerStyle={{
              marginBottom: 10,
            }}
            active={l.name === survey?.learnLanguage}
            icon={l.icon}
            title={l.name}
          />
        ))}
      </View>
    </>
  );
};

export default StepTwo;

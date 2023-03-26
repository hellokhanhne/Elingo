import * as React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { OptionCard } from '../../../components/common/OptionCard';
import { reasons } from '../../../constant';
import { setSurvay, survaySelector } from '../../../store/survay';

interface IStepFourProps {}

const StepFour: React.FunctionComponent<IStepFourProps> = props => {
  const { survey } = useSelector(survaySelector);

  const dispatch = useDispatch();
  return (
    <>
      <View>
        {reasons.map(l => (
          <OptionCard
            onClick={() =>
              dispatch(
                setSurvay({
                  learnReasons: l.name,
                }),
              )
            }
            key={l.name}
            containerStyle={{
              marginBottom: 10,
            }}
            active={survey?.learnReasons === l.name}
            icon={l.icon}
            title={l.name}
          />
        ))}
      </View>
    </>
  );
};

export default StepFour;

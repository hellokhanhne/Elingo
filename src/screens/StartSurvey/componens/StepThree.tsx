import * as React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { OptionCard } from '../../../components/common/OptionCard';
import { socials } from '../../../constant';
import { setSurvay, survaySelector } from '../../../store/survay';

interface IStepThreeProps {}

const StepThree: React.FunctionComponent<IStepThreeProps> = props => {
  const { survey } = useSelector(survaySelector);
  const dispatch = useDispatch();

  return (
    <>
      <View>
        {socials.map(l => (
          <OptionCard
            onClick={() =>
              dispatch(
                setSurvay({
                  knowedBy: l.name,
                }),
              )
            }
            key={l.name}
            containerStyle={{
              marginBottom: 10,
            }}
            active={survey?.knowedBy === l.name}
            icon={l.icon}
            title={l.name}
          />
        ))}
      </View>
    </>
  );
};

export default StepThree;

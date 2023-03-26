import * as React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LevelIcon from '../../../components/common/Level';
import { OptionCard } from '../../../components/common/OptionCard';
import { levelDatas } from '../../../constant';
import { setSurvay, survaySelector } from '../../../store/survay';

interface IStepFiveProps {}

const StepFive: React.FunctionComponent<IStepFiveProps> = props => {
  const { survey } = useSelector(survaySelector);

  const dispatch = useDispatch();

  return (
    <>
      <View>
        {levelDatas.map((l, i) => (
          <OptionCard
            onClick={() =>
              dispatch(
                setSurvay({
                  level: i + 1,
                }),
              )
            }
            key={l.name}
            containerStyle={{
              marginBottom: 10,
              paddingVertical: 20,
            }}
            active={survey?.level === i + 1}
            customIcons={<LevelIcon level={l.level} />}
            title={l.name}
          />
        ))}
      </View>
    </>
  );
};

export default StepFive;

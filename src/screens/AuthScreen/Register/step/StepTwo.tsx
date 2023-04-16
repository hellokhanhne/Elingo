import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../../../../components/common/Input';
import { useTheme } from '../../../../hooks';
import { Colors } from '../../../../theme/Variables';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerFormSelector,
  setDataRegisterForm,
} from '../../../../store/register';

interface IStepTwoProps {}

const StepTwo: React.FunctionComponent<IStepTwoProps> = props => {
  const { Fonts } = useTheme();
  const age = useSelector(registerFormSelector).data?.age;
  const dispatch = useDispatch();
  const handleChange = (age: string) => {
    dispatch(setDataRegisterForm({ age: Number(age) }));
  };
  return (
    <View>
      <Text
        style={{
          ...Fonts.textBold,
          ...Fonts.titleSmall,
          ...styles.title,
        }}
      >
        {' '}
        Bạn bao nhiêu tuổi ? 🎂
      </Text>
      <Text style={styles.label}>Tuổi</Text>
      <Input
        value={age?.toString()}
        keyboardType="numeric"
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: -7.5,
    marginBottom: 50,
  },
  label: {
    marginBottom: 15,
    fontWeight: '500',
    color: Colors.gray,
  },
});

export default StepTwo;

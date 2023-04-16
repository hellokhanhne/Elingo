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

interface IStepThreeProps {}

const StepThree: React.FunctionComponent<IStepThreeProps> = props => {
  const { Fonts } = useTheme();
  const email = useSelector(registerFormSelector).data?.email;
  const dispatch = useDispatch();
  const handleChange = (email: string) => {
    dispatch(setDataRegisterForm({ email }));
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
        Email của bạn là gì ? 📧
      </Text>
      <Text style={styles.label}>Email</Text>
      <Input
        value={email}
        keyboardType="email-address"
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

export default StepThree;

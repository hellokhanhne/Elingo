import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../../../../components/common/Input';
import { useTheme } from '../../../../hooks';
import { Colors } from '../../../../theme/Variables';

interface IStepOneProps {}

const StepOne: React.FunctionComponent<IStepOneProps> = props => {
  const { Fonts } = useTheme();
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
        Tên của bạn là gì ? 🧑👩
      </Text>
      <Text style={styles.label}>Tên đầy đủ</Text>
      <Input />
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

export default StepOne;

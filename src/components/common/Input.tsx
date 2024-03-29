import * as React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native';
import { Colors, FontSize } from '../../theme/Variables';

interface IInputProps extends TextInputProps {}

const Input: React.FunctionComponent<IInputProps> = props => {
  const [borderColor, setBorderColor] = React.useState(Colors.mediumGray);
  const handleFocus = () => {
    setBorderColor(Colors.primary);
  };
  const style = props.style || {};
  return (
    <View style={styles.container}>
      <TextInput
        onFocus={handleFocus}
        defaultValue="Andrew ainslew"
        placeholderTextColor={Colors.black}
        {...props}
        style={{
          ...styles.input,
          borderBottomColor: borderColor,
          ...(style as Object),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderColor: Colors.white,
    borderWidth: 1,
    paddingBottom: 15,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Input;

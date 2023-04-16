import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../../../components/common/Input';
import { useTheme } from '../../../../hooks';
import { Colors } from '../../../../theme/Variables';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerFormSelector,
  setDataRegisterForm,
} from '../../../../store/register';
import { ICONS, IMAGES } from '../../../../constant';

interface IStepFourProps {}

const StepFour: React.FunctionComponent<IStepFourProps> = props => {
  const { Fonts } = useTheme();
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const password = useSelector(registerFormSelector).data?.password;
  const dispatch = useDispatch();
  const handleChange = (password: string) => {
    dispatch(setDataRegisterForm({ password }));
  };

  const changeShowPassword = () => {
    setIsShowPassword(!isShowPassword);
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
        Tạo mật khẩu của bạn 🔐
      </Text>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputWrapper}>
        <Input
          style={styles.input}
          value={password}
          secureTextEntry={!isShowPassword}
          onChangeText={handleChange}
        />
        <TouchableOpacity onPress={changeShowPassword}>
          <Image
            style={styles.icon}
            source={isShowPassword ? ICONS.PasswordShow : ICONS.PasswordHide}
          />
        </TouchableOpacity>
      </View>
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
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingRight: 35,
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 5,
    bottom: 10,
  },
});

export default StepFour;

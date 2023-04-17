import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../../components/common/Input';
import { ICONS } from '../../../constant';
import { useTheme } from '../../../hooks';
import { Colors } from '../../../theme/Variables';
import DevideLine from '../../../components/common/DevideLine';

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = props => {
  const { Fonts } = useTheme();
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  //   const password = useSelector(registerFormSelector).data?.password;
  const dispatch = useDispatch();
  const handleChange = (password: string) => {
    // dispatch(setDataRegisterForm({ password }));
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
        Chào mừng bạn 👋
      </Text>
      <Text style={styles.label}>Email</Text>
      <Input
        value={''}
        keyboardType="email-address"
        onChangeText={handleChange}
      />
      <View
        style={{
          marginBottom: 50,
        }}
      ></View>
      <Text style={styles.label}>Password</Text>

      <View style={styles.inputWrapper}>
        <Input
          style={styles.input}
          value={''}
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

      <View>
        {/* <CheckBox /> */}
        <Switch />
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

export default LoginForm;

import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../../components/common/Input';
import { ICONS } from '../../../constant';
import { useTheme } from '../../../hooks';
import { Colors } from '../../../theme/Variables';

interface ILoginFormProps {
  form: {
    identifier: string;
    password: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      identifier: string;
      password: string;
    }>
  >;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = ({
  form,
  setForm,
}) => {
  const { Fonts } = useTheme();

  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const dispatch = useDispatch();

  const changeShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
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
          value={form.identifier}
          keyboardType="email-address"
          onChangeText={text =>
            setForm({
              ...form,
              identifier: text,
            })
          }
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
            value={form.password}
            secureTextEntry={!isShowPassword}
            onChangeText={text =>
              setForm({
                ...form,
                password: text,
              })
            }
          />
          <TouchableOpacity onPress={changeShowPassword}>
            <Image
              style={styles.icon}
              source={isShowPassword ? ICONS.PasswordShow : ICONS.PasswordHide}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
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

import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BackWithPercentIndicator from '../../../components/common/BackWithPercentIndicator';
import { Button } from '../../../components/common/Button';
import { useAppDispatch } from '../../../hooks/store';
import LoginForm from './LoginForm';
import { AuthAction } from '../../../store/auth';

interface ILoginScreenProps {}

const LoginScreen: React.FunctionComponent<ILoginScreenProps> = props => {
  const navigate = useNavigation();
  const [form, setForm] = React.useState({
    identifier: 'khanhjj70@gmail.com',
    password: 'khanhdev',
  });

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(AuthAction.login(form));
  };

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <BackWithPercentIndicator
        onBack={handleBack}
        containerStyle={{
          paddingHorizontal: '7.5%',
        }}
        isShowPercentIndicator={false}
        percent={20}
      />

      {/* body content  */}
      <View style={styles.bodyContainer}>
        <LoginForm form={form} setForm={setForm} />
      </View>
      {/* bottom  */}
      <View style={styles.bottomContainer}>
        <Button
          type={true ? 'filled' : 'light'}
          active={true}
          text="Đăng nhập"
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: '2.5%',
    paddingBottom: '25%',
  },
  bodyContainer: {
    marginTop: '10%',
    paddingHorizontal: '7.5%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    borderTopColor: '#F5F5F5',
    borderTopWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: '10%',
  },
});

export default LoginScreen;

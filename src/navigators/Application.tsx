import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { useFlipper } from '@react-navigation/devtools';

import ChatContextProvider from '../context/ChatContext';
import { useTheme } from '../hooks';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import LoginScreen from '../screens/AuthScreen/Login';
import RegisterScreen from '../screens/AuthScreen/Register';
import { LessionComplete } from '../screens/LessionComplete';
import { LessionScreen } from '../screens/MainScreen/LessionScreen';
import { WelcomeCreateProfileScreen } from '../screens/ProfileScreen/WelcomeCreateProfile';
import SettingScreen from '../screens/SettingScreen';
import SplashScreen from '../screens/SplashSceen';
import StartSurvayScreen from '../screens/StartSurvey';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { AuthAction, authSelector } from '../store/auth';
import { Colors } from '../theme/Variables';
import MainNavigator from './Main';
import ChatRoomScreen from '../screens/ChatScreen/ChatRoomScreen';
import { PremiumScreen } from '../screens/MainScreen/PremiumScreen';
import { UserProfile } from '../screens/ProfileScreen/UserProfile';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { isAuthLoading, isAuthenticated } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  useEffect(() => {
    dispatch(AuthAction.loadAuth());
  }, []);

  if (isAuthLoading) return <SplashScreen.NoNavigate />;
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />

        {isAuthenticated ? (
          <>
            <ChatContextProvider>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={MainNavigator} />
                <Stack.Screen name="LessionScreen" component={LessionScreen} />
                <Stack.Screen name="SettingScreen" component={SettingScreen} />
                <Stack.Screen name="premium" component={PremiumScreen} />
                <Stack.Screen
                  name="UserProfileScreen"
                  component={UserProfile}
                />
                <Stack.Screen
                  name="ChatRoom"
                  component={ChatRoomScreen}
                  options={{}}
                />
                <Stack.Screen
                  name="LessionComplete"
                  component={LessionComplete}
                />
              </Stack.Navigator>
            </ChatContextProvider>
          </>
        ) : (
          <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

              <Stack.Screen
                name="StartSurveyScreen"
                component={StartSurvayScreen}
              />
              <Stack.Screen
                name="WelcomeCreateProfileScreen"
                component={WelcomeCreateProfileScreen}
              />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;

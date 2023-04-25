import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { useFlipper } from '@react-navigation/devtools';

import { useTheme } from '../hooks';
import { WelcomeCreateProfileScreen } from '../screens/ProfileScreen/WelcomeCreateProfile';
import SplashScreen from '../screens/SplashSceen';
import StartSurvayScreen from '../screens/StartSurvey';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/AuthScreen/Register';
import LoginScreen from '../screens/AuthScreen/Login';
import MainNavigator from './Main';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { AuthAction, authSelector } from '../store/auth';

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
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <>
              <Stack.Screen name="Main" component={MainNavigator} />
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { AccountScreen } from '../screens/MainScreen/AccountScreen';
import { ChallengeScreen } from '../screens/MainScreen/ChallengeScreen';
import { HomeScreen } from '../screens/MainScreen/HomeScreen';
import { LeaderBoardScreen } from '../screens/MainScreen/LeaderBoardScreen';
import { PremiumScreen } from '../screens/MainScreen/PremiumScreen';
import { Image } from 'react-native';
import { ICONS } from '../constant';
import { Colors } from '../theme/Variables';

const homeName = 'Home';
const leaderboard = 'Leaderboard';
const premium = 'Premium';
const challenge = 'Challenge';
const account = 'Account';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          let rn = route.name;
          switch (rn) {
            case homeName:
              icon = focused ? ICONS.Home : ICONS.HomeOutline;
              break;
            case leaderboard:
              icon = focused ? ICONS.Leaderboard : ICONS.LeaderboardOutline;
              break;
            case premium:
              icon = focused ? ICONS.Star : ICONS.StarOutline;
              break;
            case challenge:
              icon = focused ? ICONS.Challenge : ICONS.ChallengeOutline;
              break;
            case account:
              icon = focused ? ICONS.User : ICONS.UserOutline;
              break;
          }
          return (
            <Image
              style={{
                width: 22.5,
                height: 22.5,
                tintColor: focused ? Colors.primary : Colors.gray,
              }}
              source={icon}
            />
          );
        },
        tabBarStyle: {
          paddingBottom: 15,
          paddingTop: 7.5,
          height: 70,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: Colors.white,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {},
        headerShown: false,
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={leaderboard} component={LeaderBoardScreen} />
      <Tab.Screen name={premium} component={PremiumScreen} />
      <Tab.Screen name={challenge} component={ChallengeScreen} />
      <Tab.Screen name={account} component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image } from 'react-native';
import { ICONS } from '../constant';
import { AccountScreen } from '../screens/MainScreen/AccountScreen';
import { ChallengeScreen } from '../screens/MainScreen/ChallengeScreen';
import { HomeScreen } from '../screens/MainScreen/HomeScreen';
import { LeaderBoardScreen } from '../screens/MainScreen/LeaderBoardScreen';
import { Colors } from '../theme/Variables';
import ChatStackNavigation from './ChatStackNavigation';
import ARMode from '../screens/ArScreen';

const homeName = 'Home';

const leaderboard = 'Leaderboard';
const premium = 'Chanels';
const challenge = 'Challenge';
const account = 'Account';
const armode = 'Armode';

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
              icon = focused ? ICONS.Chat2 : ICONS.Chat2Outline;
              break;
            case challenge:
              icon = focused ? ICONS.Challenge : ICONS.ChallengeOutline;
              break;
            case account:
              icon = focused ? ICONS.User : ICONS.UserOutline;
              break;
            case armode:
              icon = ICONS.ArMode;
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
      <Tab.Screen name={premium} component={ChatStackNavigation} />
      <Tab.Screen name={challenge} component={ChallengeScreen} />
      <Tab.Screen
        options={{
          tabBarStyle: { display: 'none' },
        }}
        name={armode}
        component={ARMode}
      />
      <Tab.Screen name={account} component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatsScreen from '../screens/ChatScreen/ChatScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Chats"
          component={ChatsScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </>
  );
};

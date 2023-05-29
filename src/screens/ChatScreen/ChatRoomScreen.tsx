import React, { useEffect } from 'react';
import { useChatContext } from '../../context/ChatContext';

import { useNavigation } from '@react-navigation/native';
import { Channel, MessageInput, MessageList } from 'stream-chat-react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tailwind from 'twrnc';
import { ICONS } from '../../constant';
import { Colors } from '../../theme/Variables';

const ChatRoomScreen = () => {
  const { currentChannel, chatClient } = useChatContext();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: currentChannel?.data?.name || 'Channel' });
  }, [currentChannel?.data?.name]);

  const currentUser = chatClient?.user;

  let user: any;

  if (currentChannel!.id === 'elingo-chanel') {
    user = {
      name: 'Elingo chanel',
      image: ICONS.Logo,
      local: true,
    };
  } else {
    user = Object.entries(currentChannel!?.state?.members).find(data => {
      return currentUser.id !== data[0];
    });
    user = user[1]?.user;
  }

  return (
    <View style={tailwind`bg-white relative flex-1`}>
      <Channel channel={currentChannel as any}>
        <View style={[tailwind`flex-row items-center  h-[8%] mt-[5%] px-[5%]`]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={ICONS.Back}
              style={[
                tailwind`w-[25px] h-[25px] mr-3`,
                {
                  tintColor: Colors.primary,
                },
              ]}
            />
          </TouchableOpacity>
          <Image
            style={tailwind`h-[35px] w-[35px] ${
              !user.local ? 'rounded-full' : ''
            } mr-3`}
            source={
              user.local
                ? user.image
                : {
                    uri: user.image,
                  }
            }
          />
          <Text style={tailwind`font-semibold text-[16px] text-black`}>
            {user.name}
          </Text>
          <View style={tailwind`flex-1 justify-end flex-row`}>
            <Image
              source={ICONS.Energy}
              style={[
                tailwind`w-[22px] h-[22px] mr-3`,
                {
                  tintColor: Colors.primary,
                },
              ]}
            />
            <Image
              source={ICONS.Compass}
              style={[
                tailwind`w-[22px] h-[22px] mr-3`,
                {
                  tintColor: Colors.primary,
                },
              ]}
            />
            <Image
              source={ICONS.Info}
              style={[
                tailwind`w-[22px] h-[22px]`,
                {
                  tintColor: Colors.primary,
                },
              ]}
            />
          </View>
        </View>
        <MessageList />
        <MessageInput />
      </Channel>
    </View>
  );
};

export default ChatRoomScreen;

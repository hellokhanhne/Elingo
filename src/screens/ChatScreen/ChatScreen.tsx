import React from 'react';
import { useChatContext } from '../../context/ChatContext';

import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Channel } from 'stream-chat';
import { ChannelList } from 'stream-chat-react-native';
import tailwind from 'twrnc';
import { ICONS } from '../../constant';
import { Colors } from '../../theme/Variables';
import { RANDOM_IMAGE_URL } from '../../utils/randomImage';

const ChatsScreen = () => {
  const { setCurrentChannel, chatClient } = useChatContext();

  const navigation = useNavigation();

  const onSelect = (chanel: Channel) => {
    setCurrentChannel(chanel);
    navigation.navigate('ChatRoom' as never);
  };

  const filters = {
    $or: [{ type: 'livestream' }, { members: { $in: [chatClient.user.id] } }],
  };

  return (
    <>
      <View
        style={tailwind`bg-white pt-[10%] px-[5%] pb-[5%] flex-row items-center justify-between`}
      >
        <Text style={tailwind`font-semibold text-[20px]`}>Chanels</Text>
        <Pressable
          onPress={() => navigation.navigate('Users' as never)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Image
            style={[
              tailwind`w-[20px] h-[20px]`,
              {
                tintColor: Colors.gray,
              },
            ]}
            source={ICONS.search}
          />
        </Pressable>
      </View>
      <ChannelList
        filters={filters as any}
        onSelect={onSelect}
        PreviewAvatar={({ channel }) => {
          const currentUser = chatClient?.user;

          let user: any;

          if (channel!.id === 'elingo-chanel') {
            user = {
              name: 'Elingo chanel',
              image: ICONS.Logo,
              local: true,
            };
          } else {
            user = Object.entries(channel!?.state?.members).find(data => {
              return currentUser.id !== data[0];
            });
            user = user[1]?.user;
          }

          return (
            <TouchableOpacity
              style={tailwind`h-full justify-center`}
              disallowInterruption={true}
              onPress={() => {
                /** Handler for press action */
              }}
            >
              <Image
                style={tailwind`w-[36px] h-[36px] ${
                  channel.id === 'elingo-chanel' ? '' : 'rounded-full'
                }`}
                source={
                  channel.id === 'elingo-chanel'
                    ? ICONS.Logo
                    : {
                        uri: user.image || RANDOM_IMAGE_URL,
                      }
                }
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default ChatsScreen;

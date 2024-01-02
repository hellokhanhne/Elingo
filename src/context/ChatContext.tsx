import { useNavigation } from '@react-navigation/native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StreamChat, Channel } from 'stream-chat';
import { useUser } from '../hooks';
import { Chat, OverlayProvider } from 'stream-chat-react-native';
import { IUser } from '../store/auth';
import { RANDOM_IMAGE_URL } from '../utils/randomImage';

type ChatContextType = {
  currentChannel?: Channel;
  chatClient?: any;
  setCurrentChannel?: any;
  startDMChatRoom?: any;
  joinEventChatRoom?: any;
};

export const ChatContext = createContext<ChatContextType>({
  currentChannel: undefined,
});

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  // component
  const [chatClient, setChatClient] = useState<StreamChat>();
  const [currentChannel, setCurrentChannel] = useState<Channel>();
  const user = useUser();
  const navigation = useNavigation();

  useEffect(() => {
    const initChat = async () => {
      if (!user) {
        return;
      }

      const client = StreamChat.getInstance('phydmhvvr39w');

      await client.connectUser(
        {
          id: `identify-${user.id}`,
          name: user.fullname,
          image: user?.avatar?.url || RANDOM_IMAGE_URL,
        },
        client.devToken(`identify-${user.id}`),
      );

      setChatClient(client);

      const globalChannel = client.channel('livestream', 'elingo-chanel', {
        name: 'Elingo',
      });

      await globalChannel.watch();
    };

    initChat();

    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, [user]);

  const startDMChatRoom = async (chatWithUser: IUser) => {
    if (!chatClient) {
      return;
    }
    const newChannel = chatClient.channel('messaging', {
      members: [chatClient.userID, `identify-${chatWithUser.id}`] as any,
    });

    await newChannel.watch();
    setCurrentChannel(newChannel);
    // navigation.goBack();

    navigation.navigate('ChatRoom' as never);
  };

  const joinEventChatRoom = async (event: any) => {
    if (!chatClient) {
      return;
    }
    const channelId = `room-${event.id}`;
    const eventChannel = chatClient.channel('livestream', channelId, {
      name: event.name,
    });

    await eventChannel.watch({ watchers: { limit: 100 } });
    setCurrentChannel(eventChannel);

    navigation.navigate(
      'Root' as never,
      {
        screen: 'Chat',
      } as never,
    );
    navigation.navigate(
      'Root' as never,
      {
        screen: 'Chat',
        params: { screen: 'ChatRoom' },
      } as never,
    );
  };

  if (!chatClient) {
    return <ActivityIndicator />;
  }

  const value: ChatContextType = {
    chatClient,
    currentChannel,
    setCurrentChannel,
    startDMChatRoom,
    joinEventChatRoom,
  };
  return (
    <OverlayProvider>
      <Chat client={chatClient}>
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
      </Chat>
    </OverlayProvider>
  );
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;

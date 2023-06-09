import { MeetingProvider } from '@videosdk.live/react-native-sdk';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { METTING_TOKEN, createMeeting } from '../../api/meeting';
import { MeetingView } from './MettingView';
import JoinScreen from './JoinScreen';

export default function CallScreen() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingId = async (id: any) => {
    const meetingId = id == null ? await createMeeting() : id;
    setMeetingId(meetingId);
  };

  return meetingId ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F6FF' }}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: true,
          name: 'Test User',
        }}
        token={METTING_TOKEN}
      >
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
}

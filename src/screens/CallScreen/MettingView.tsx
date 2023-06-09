import {
  MediaStream,
  RTCView,
  useMeeting,
  useParticipant,
} from '@videosdk.live/react-native-sdk';
import { FlatList, Text, View } from 'react-native';
import ControlsContainer from './components/controls';

function ParticipantView({ participantId }: any) {
  const { webcamStream, webcamOn } = useParticipant(participantId);
  console.log(webcamStream);
  return webcamOn && webcamStream ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={'cover'}
      style={{
        height: 300,
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    />
  ) : (
    <View
      style={{
        backgroundColor: 'grey',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
    </View>
  );
}

function ParticipantList({ participants }: any) {
  return participants.length > 0 ? (
    <FlatList
      data={participants}
      renderItem={({ item }: any) => {
        return <ParticipantView participantId={item} />;
      }}
    />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F6F6FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20 }}>Press Join button to enter meeting.</Text>
    </View>
  );
}

function MeetingView() {
  const { participants } = useMeeting({});
  const participantsArrId = [...participants.keys()];

  return (
    <View style={{ flex: 1 }}>
      <ParticipantList participants={participantsArrId} />
      <ControlsContainer />
    </View>
  );
}

export { ParticipantList, MeetingView };

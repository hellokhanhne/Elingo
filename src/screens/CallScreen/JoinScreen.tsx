import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';

function JoinScreen({ getMeetingId }: any) {
  const [meetingVal, setMeetingVal] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6F6FF',
        justifyContent: 'center',
        paddingHorizontal: 6 * 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          // console.log('ok');
          // console.log(props.getMeetingId());
          getMeetingId(null);
          // props.getMeetingId();
        }}
        style={{ backgroundColor: '#1178F8', padding: 12, borderRadius: 6 }}
      >
        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18 }}>
          Create Meeting
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 22,
          marginVertical: 16,
          fontStyle: 'italic',
          color: 'grey',
        }}
      >
        ---------- OR ----------
      </Text>
      <TextInput
        value={meetingVal}
        onChangeText={setMeetingVal}
        placeholder={'XXXX-XXXX-XXXX'}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          fontStyle: 'italic',
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#1178F8',
          padding: 12,
          marginTop: 14,
          borderRadius: 6,
        }}
        onPress={() => {
          getMeetingId(meetingVal);
        }}
      >
        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18 }}>
          Join Meeting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default JoinScreen;

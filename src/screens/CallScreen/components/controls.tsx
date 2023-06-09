import { useMeeting } from '@videosdk.live/react-native-sdk';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, buttonText, backgroundColor }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 4,
      }}
    >
      <Text style={{ color: 'white', fontSize: 12 }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

function ControlsContainer() {
  const { join, leave, toggleWebcam, toggleMic, enableWebcam, getWebcams } =
    useMeeting({});
  return (
    <View
      style={{
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Button
        onPress={async () => {
          const webcams = await getWebcams();
          console.log(webcams);
        }}
        buttonText={'Enable'}
        backgroundColor={'#1178F8'}
      />
      <Button
        onPress={() => {
          join();
        }}
        buttonText={'Join'}
        backgroundColor={'#1178F8'}
      />
      <Button
        onPress={() => {
          toggleWebcam();
        }}
        buttonText={'Toggle Webcam'}
        backgroundColor={'#1178F8'}
      />
      <Button
        onPress={() => {
          toggleMic();
        }}
        buttonText={'Toggle Mic'}
        backgroundColor={'#1178F8'}
      />
      <Button
        onPress={() => {
          leave();
        }}
        buttonText={'Leave'}
        backgroundColor={'#FF0000'}
      />
    </View>
  );
}

export default ControlsContainer;

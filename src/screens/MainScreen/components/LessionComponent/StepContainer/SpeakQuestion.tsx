import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Voice from '@react-native-voice/voice';
import { ANIMATIONS, ICONS, IMAGES } from '../../../../../constant';
import { ToolTip } from '../../../../../components/common/ToolTip';
import { Colors } from '../../../../../theme/Variables';
import DevideLine from '../../../../../components/common/DevideLine';
import { useTheme } from '../../../../../hooks';
import AnimatedLottieView from 'lottie-react-native';
import { IQuestionProps } from './IQuestionProps.type';

interface ISpeakQuestionProps extends IQuestionProps {}

const SpeakQuestion: React.FunctionComponent<ISpeakQuestionProps> = props => {
  let [started, setStarted] = useState(true);
  let [results, setResults] = useState([]);

  const { Fonts, Layout, FontSize } = useTheme();

  React.useEffect(() => {
    (async () => {
      Voice.onSpeechError = onSpeechError;
      Voice.onSpeechResults = onSpeechResults;
    })();
    return () => {
      Voice.destroy().then(() => Voice.removeAllListeners());
    };
  }, []);

  const startSpeechToText = async () => {
    await Voice.start('en-US');
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = async (result: any) => {
    setResults(result.value);
    if (started) {
      await stopSpeechToText();
    }
  };

  const onSpeechError = (error: any) => {
    console.log(error);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: '0%',
          marginTop: '10%',
        }}
      >
        <View>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={IMAGES.NormalGuilder}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: '5%',
          }}
        >
          <ToolTip
            alwaysAminate={true}
            containerStyle={{
              maxWidth: '95%',
              paddingLeft: 40,
            }}
            arrow="left"
            text={'Tea and coffe.'}
          >
            <View style={styles.speakerTooltip}>
              <TouchableOpacity>
                <Image
                  source={ICONS.Sound}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: Colors.primary,
                  }}
                />
              </TouchableOpacity>
            </View>
          </ToolTip>
        </View>
      </View>
      <DevideLine
        style={{
          marginTop: 30,
        }}
      />
      <View
        style={{
          width: '100%',
        }}
      >
        {started ? (
          <TouchableOpacity
            style={{ ...styles.speakingAnimate, ...Layout.rowCenter }}
            onPress={stopSpeechToText}
          >
            <AnimatedLottieView
              source={ANIMATIONS.SpeakingAnimation}
              autoPlay={true}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ ...styles.speakButton, ...Layout.rowCenter }}
            onPress={startSpeechToText}
          >
            <Image source={ICONS.Mic} style={styles.micIcon} />
            <Text
              style={{
                ...Fonts.textPrimary,
                fontWeight: '700',
                fontSize: FontSize.medium,
              }}
            >
              Chạm để nói
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  speakerTooltip: {
    position: 'absolute',
    top: 12,
    left: 10,
  },
  micIcon: {
    width: 25,
    height: 25,
    tintColor: Colors.primary,
    marginRight: 15,
  },
  speakButton: {
    paddingHorizontal: 20,
    paddingVertical: 21.5,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    marginTop: 30,
    width: '100%',
  },
  speakingAnimate: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default SpeakQuestion;

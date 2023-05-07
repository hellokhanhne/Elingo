import DuoDragDrop, {
  DuoDragDropRef,
  Placeholder,
  Word,
} from '@jamsch/react-native-duo-drag-drop';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';
import { ICONS } from '../../../../../constant';
import { useTheme } from '../../../../../hooks';
import { Colors, FontSize } from '../../../../../theme/Variables';
import Lines from '../../../../../components/common/Lines';
import { IQuestionProps } from './IQuestionProps.type';

interface IAudioQuestionProps extends IQuestionProps {}

const AudioQuestion: React.FunctionComponent<IAudioQuestionProps> = props => {
  const { Layout, Fonts } = useTheme();
  const sound = React.useRef<Sound>();
  const duoDragDropRef = React.useRef<DuoDragDropRef>(null);
  Sound.setCategory('Playback', true);
  React.useEffect(() => {
    const s = new Sound(
      'https://res.cloudinary.com/wonder-place/video/upload/v1682933424/Tea_And_Coffe_fcdc4a9b8f.mp3',
      null as any,
      error => {
        if (error) {
          console.log('error', error);
        }
        sound.current = s;
      },
    );
  }, []);
  return (
    <View>
      <View
        style={{
          ...Layout.row,
          ...Layout.alignItemsCenter,
          paddingVertical: 25,
        }}
      >
        <TouchableOpacity
          style={{
            width: '100%',
            borderColor: Colors.lightGray,
            borderWidth: 1,
            ...Layout.center,
            paddingVertical: 25,
            borderRadius: 10,
          }}
          onPress={() => {
            try {
              sound?.current?.play(() => {});
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <LinearGradient
            colors={['#856aff', '#694bff']}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 80,
              height: 80,
              ...Layout.center,
              borderRadius: 40,
            }}
          >
            <Image
              source={ICONS.Play}
              style={{
                width: 40,
                height: 40,
                tintColor: Colors.white,
              }}
            />
          </LinearGradient>
          <Text
            style={{
              marginTop: 20,
              color: Colors.mediumGray,
              fontWeight: '700',
            }}
          >
            {' '}
            Chạm để nghe audio
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <DuoDragDrop
          ref={duoDragDropRef}
          wordHeight={50}
          wordGap={5}
          wordBankOffsetY={30}
          words={[
            'Juan',
            'She',
            'apples',
            'today',
            'with',
            'eats',
            'her',
            'another',
          ]}
          onDrop={() => {
            console.log(duoDragDropRef.current?.getAnsweredWords());
          }}
          renderLines={props => (
            <Lines
              {...props}
              renderTopLine={false}
              containerStyle={{
                backgroundColor: 'transparent',
              }}
            />
          )}
          renderPlaceholder={({ style }) => (
            <Placeholder style={[style, { borderRadius: 15 }]} />
          )}
          renderWord={(_word, index) => (
            <Word
              containerStyle={{
                borderRadius: 15,
                backgroundColor: Colors.white,
                borderColor: '#e1e1e1',
                borderWidth: 1.5,
              }}
              textStyle={{}}
            />
          )}
        />
      </View>
    </View>
  );
};

export default AudioQuestion;

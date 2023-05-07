import DuoDragDrop, {
  DuoDragDropRef,
  Placeholder,
  Word,
} from '@jamsch/react-native-duo-drag-drop';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';
import Lines from '../../../../../components/common/Lines';
import { ICONS } from '../../../../../constant';
import { useTheme } from '../../../../../hooks';
import { Colors, FontSize } from '../../../../../theme/Variables';
import { IQuestionProps } from './IQuestionProps.type';

interface IMeaningQuestionProps extends IQuestionProps {}

const MeaningQuestion: React.FunctionComponent<
  IMeaningQuestionProps
> = props => {
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
              width: 50,
              height: 50,
              ...Layout.center,
              borderRadius: 25,
            }}
          >
            <Image
              source={ICONS.Sound}
              style={{
                width: 25,
                height: 25,
                tintColor: Colors.white,
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: FontSize.medium,
            fontWeight: '600',
            marginLeft: 20,
            color: Colors.black,
            opacity: 0.7,
            flex: 1,
          }}
        >
          Tea and coffee.
        </Text>
      </View>

      <View
        style={{
          marginTop: '5%',
        }}
      >
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

export default MeaningQuestion;

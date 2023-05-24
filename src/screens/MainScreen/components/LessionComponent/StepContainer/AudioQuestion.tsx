import DuoDragDrop, {
  DuoDragDropRef,
  Placeholder,
  Word,
} from '@jamsch/react-native-duo-drag-drop';
import * as React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Lines from '../../../../../components/common/Lines';
import { ICONS } from '../../../../../constant';
import { useSound, useTheme } from '../../../../../hooks';
import { Colors } from '../../../../../theme/Variables';
import { IQuestionProps } from './IQuestionProps.type';
import { useQuestionContext } from '../../../../../context/LessionContext';

interface IAudioQuestionProps extends IQuestionProps {}

const AudioQuestion: React.FunctionComponent<IAudioQuestionProps> = ({
  question,
}) => {
  const { Layout, Fonts } = useTheme();
  const sound = useSound(question.media.url);
  const duoDragDropRef = React.useRef<DuoDragDropRef>(null);

  const { setCurrentResult } = useQuestionContext();

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
          words={question.word_medias.map(w => w.name)}
          onDrop={() => {
            setCurrentResult(
              duoDragDropRef.current?.getAnsweredWords()?.join(' '),
            );
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

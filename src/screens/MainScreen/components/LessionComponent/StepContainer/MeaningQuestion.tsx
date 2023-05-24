import DuoDragDrop, {
  DuoDragDropRef,
  Placeholder,
  Word,
} from '@jamsch/react-native-duo-drag-drop';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Lines from '../../../../../components/common/Lines';
import { ICONS } from '../../../../../constant';
import { useSound, useTheme } from '../../../../../hooks';
import { Colors, FontSize } from '../../../../../theme/Variables';
import { IQuestionProps } from './IQuestionProps.type';
import { useQuestionContext } from '../../../../../context/LessionContext';

interface IMeaningQuestionProps extends IQuestionProps {}

const MeaningQuestion: React.FunctionComponent<IMeaningQuestionProps> = ({
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
          {question.title}
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
          words={question.content.words}
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

export default MeaningQuestion;

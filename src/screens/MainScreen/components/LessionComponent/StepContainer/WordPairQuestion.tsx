import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../../hooks';
import { Colors } from '../../../../../theme/Variables';
import { IQuestionProps } from './IQuestionProps.type';
import shuffleArray from '../../../../../utils/shuffleArray';
import {
  useCorrectSound,
  useIncorrectSound,
} from '../../../../../hooks/useSound';
import { useQuestionContext } from '../../../../../context/LessionContext';

interface IWordPairQuestionProps extends IQuestionProps {}

const Item = ({
  text,
  onPress,
  active,
  style,
  disabled,
}: {
  text: string;
  onPress: any;
  active: boolean;
  style?: any;
  disabled: boolean;
}) => {
  const { Layout, FontSize, Fonts } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.item, active && styles.itemActive, style && style]}>
        <Text
          style={{
            fontWeight: '600',
            color: active || style ? Colors.white : Colors.black,
            fontSize: FontSize.tiny,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const WordPairQuestion: React.FunctionComponent<IWordPairQuestionProps> = ({
  question,
}) => {
  const correctAudio = useCorrectSound();
  const inCorrectAudio = useIncorrectSound();

  const { setCurrentResult } = useQuestionContext();

  const [activeVn, setActiveVn] = useState('');
  const [activeEn, setActiveEn] = useState('');
  const [type, setType] = useState<number>();
  const [pair, setPair] = useState<string[]>([]);
  const [disabledItems, setDisabledItems] = useState<string[]>([]);

  const leftArr = useMemo(() => {
    const data = question.content.map((w: any) => w.en);
    shuffleArray(data);
    return data;
  }, []);

  const rightArr = useMemo(() => {
    const data = question.content.map((w: any) => w.vn);
    shuffleArray(data);
    return data;
  }, []);

  const handleClickLeft = (t: string) => {
    if (pair.length > 0) {
      setPair([]);
    }
    if (!activeVn) {
      setActiveEn(t);
    } else {
      const q = question.content.find((q: any) => q.en === t);
      if (q.vn === activeVn) {
        setDisabledItems(d => [...d, t, q.vn]);
        correctAudio.current?.play();
      } else {
        setType(0);
        setPair([t, activeVn]);
        inCorrectAudio.current?.play();
      }
      setActiveVn('');
      setActiveEn('');
    }
  };

  const handleClickRight = (t: string) => {
    if (pair.length > 0) {
      setPair([]);
    }
    if (!activeEn) {
      setActiveVn(t);
    } else {
      const q = question.content.find((q: any) => q.vn === t);
      if (q.en === activeEn) {
        setDisabledItems(d => [...d, t, q.en]);
        correctAudio.current?.play();
      } else {
        setType(0);
        setPair([t, activeEn]);
        inCorrectAudio.current?.play();
      }
      setActiveVn('');
      setActiveEn('');
    }
  };

  const getStyle = (t: string) => {
    if (disabledItems.includes(t)) {
      return styles.itemSuccess;
    } else if (type === 0 && pair.includes(t)) {
      return styles.itemFail;
    }
    return null;
  };

  if (disabledItems.length === rightArr.length + leftArr.length) {
    console.log('true');
    setCurrentResult(true);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            marginRight: 25,
          }}
        >
          {leftArr.map((t: any, index: any) => {
            return (
              <Item
                disabled={disabledItems.includes(t)}
                key={`${t}-${index}`}
                active={t === activeEn}
                style={getStyle(t)}
                onPress={() => handleClickLeft(t)}
                text={t}
              />
            );
          })}
        </View>
        <View>
          {rightArr.map((t: any, index: any) => (
            <Item
              disabled={disabledItems.includes(t)}
              key={`${t}-${index}`}
              active={t === activeVn}
              style={getStyle(t)}
              onPress={() => handleClickRight(t)}
              text={t}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
  },
  item: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderColor: Colors.lightGray2,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  itemActive: {
    borderWidth: 0,
    backgroundColor: Colors.primary,
  },
  itemSuccess: {
    borderWidth: 0,
    backgroundColor: Colors.success,
  },
  itemFail: {
    borderWidth: 0,
    backgroundColor: Colors.error,
  },
});

export default WordPairQuestion;

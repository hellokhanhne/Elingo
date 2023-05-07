import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../../hooks';
import { Colors } from '../../../../../theme/Variables';
import { IQuestionProps } from './IQuestionProps.type';

interface IWordPairQuestionProps extends IQuestionProps {}

const wordPairs = [
  { vn: 'Thành viên', en: 'Member' },
  { vn: 'Sự sinh ra', en: 'Birth' },
  { en: 'Brother', vn: 'Anh/em trai' },
  { vn: 'Con gái', en: 'Daughter' },
  { vn: 'Cha/Bố', en: 'Father' },
  { vn: 'Ông bà', en: 'Grandparents' },
];

const Item = ({
  text,
  onPress,
  active,
}: {
  text: string;
  onPress: any;
  active: boolean;
}) => {
  const { Layout, FontSize, Fonts } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.item, active && styles.itemActive]}>
        <Text
          style={{
            fontWeight: '600',
            color: active ? Colors.white : Colors.black,
            fontSize: FontSize.tiny,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const WordPairQuestion: React.FunctionComponent<
  IWordPairQuestionProps
> = props => {
  const { Layout, FontSize } = useTheme();
  const [activeVn, setActiveVn] = useState('');
  const [activeEn, setActiveEn] = useState('');
  const leftArr = wordPairs.map(w => w.en);
  const rightArr = wordPairs.map(w => w.vn);

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
          {leftArr.map((t, index) => (
            <Item
              key={`${t}-${index}`}
              active={t === activeEn}
              onPress={() => setActiveEn(t)}
              text={t}
            />
          ))}
        </View>
        <View>
          {rightArr.map((t, index) => (
            <Item
              key={`${t}-${index}`}
              active={t === activeVn}
              onPress={() => setActiveVn(t)}
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
});

export default WordPairQuestion;

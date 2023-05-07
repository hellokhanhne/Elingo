import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../../hooks';
import LinearGradient from 'react-native-linear-gradient';
import { ICONS } from '../../../../../constant';
import { Colors } from '../../../../../theme/Variables';
import { OptionCard } from '../../../../../components/common/OptionCard';
import { IQuestionProps } from './IQuestionProps.type';

interface IChoiceQuestionProps extends IQuestionProps {}
{
}

const question = [
  'Chàng trai đang ăn bánh mì',
  'Chàng trai đang chơi game',
  'Chàng trai đang xem phim',
];

const ChoiceQuestion: React.FunctionComponent<IChoiceQuestionProps> = props => {
  const [questions, setQuestions] = React.useState(question);
  const { Layout, FontSize } = useTheme();
  return (
    <View style={styles.container}>
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
              //   sound?.current?.play(() => {});
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
          marginTop: 40,
        }}
      >
        {question.map(l => (
          <OptionCard
            onClick={() =>
              //   dispatch(
              //     setSurvay({
              //       learnReasons: l.name,
              //     }),
              //   )
              {}
            }
            key={l}
            wrappeTextStyle={{
              justifyContent: 'center',
            }}
            containerStyle={{
              marginBottom: 15,
              paddingVertical: 20,
            }}
            textStyle={{
              fontWeight: '600',
              fontSize: 16,
              marginLeft: 0,
              flex: 0,
            }}
            active={false}
            // icon={l.icon}
            title={l}
          />
        ))}
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
});

export default ChoiceQuestion;

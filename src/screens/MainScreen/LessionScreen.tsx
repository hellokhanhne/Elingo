import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackWithPercentIndicator from '../../components/common/BackWithPercentIndicator';
import { Button } from '../../components/common/Button';
import { ICONS } from '../../constant';
import { useTheme, useUser } from '../../hooks';
import StepContainer from './components/LessionComponent/StepContainer';
import { useGetOneLession } from '../../api/lession';
import LessionProvider, {
  useQuestionContext,
} from '../../context/LessionContext';
import { IQuestion } from '../../types';
import StatusBottomModal from '../../components/bottomModal/StatusBottomModal';

export interface ILessionScreenProps {
  route: any;
}

const BodyContent = ({ questions }: { questions: IQuestion[] }) => {
  const { Layout } = useTheme();
  const navigate = useNavigation();
  const user = useUser();
  const { step, handeNextQuestion, handleCheckAnswer, statusModal } =
    useQuestionContext();

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View>
        <BackWithPercentIndicator
          onBack={() => navigate.navigate('Home' as never)}
          customLeftIcon={ICONS.Close}
          customIconStyle={{
            width: 15,
            height: 15,
          }}
          percent={(100 / questions.length) * step}
          // isShowPercentIndicator={true}
          containerStyle={{
            paddingHorizontal: '7.5%',
          }}
          rightComponent={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
              }}
            >
              <Image
                source={ICONS.Diamond}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontWeight: '900',
                  color: '#212121',
                }}
              >
                {user.diamond}
              </Text>
            </View>
          }
        />
      </View>
      {/* body  */}
      <ScrollView
        style={{
          ...Layout.fill,
        }}
      >
        <StepContainer questions={questions} />
      </ScrollView>
      {/* bottom  */}
      <View style={styles.bottomContainer}>
        <Button
          onPress={handleCheckAnswer}
          text="Kiểm Tra Đáp Án"
          textStyles={{
            textTransform: 'none',
          }}
        />
      </View>
      {/* status modal  */}
      <StatusBottomModal
        status={statusModal.type}
        onButtonClick={handeNextQuestion}
        visible={statusModal.visiable}
        correctAnswer={statusModal.correctAnswer}
      />
    </View>
  );
};

export function LessionScreen(props: ILessionScreenProps) {
  const { params } = props.route;
  const { data } = useGetOneLession(params.id, {});
  return (
    <>
      {data && (
        <LessionProvider questions={data?.questions}>
          <BodyContent questions={data?.questions} />
        </LessionProvider>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '11%',
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#F5F5F5',
    borderTopWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: '10%',
    paddingVertical: '5.5%',
    paddingBottom: '7.5%',
  },
});

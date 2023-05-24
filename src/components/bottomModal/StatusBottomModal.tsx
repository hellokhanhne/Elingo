import React, { useEffect, useRef } from 'react';
import { Animated, Image, Modal, StyleSheet, Text, View } from 'react-native';
import { ICONS } from '../../constant';
import { useSound, useTheme } from '../../hooks';
import { Colors, FontSize } from '../../theme/Variables';
import { Button } from '../common/Button';
import { useCorrectSound, useIncorrectSound } from '../../hooks/useSound';

interface IStatusBottomModalProps {
  status: 'success' | 'danger';
  onButtonClick: any;
  visible: boolean;
  correctAnswer?: string;
  onClose?: any;
}

const StatusBottomModal: React.FunctionComponent<IStatusBottomModalProps> = ({
  status,
  correctAnswer,
  onButtonClick,
  visible,
}) => {
  const { Layout, Fonts } = useTheme();
  const isSucess = status === 'success' ? true : false;
  let statusColor = isSucess ? '#14d18e' : '#f75554';
  const translateYAnim = useRef(new Animated.Value(100)).current;

  const correctAudio = useCorrectSound();

  const inCorrectAudio = useIncorrectSound();

  useEffect(() => {
    if (visible) {
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
      if (status === 'success') {
        correctAudio.current?.play();
      } else {
        inCorrectAudio.current?.play();
      }
    }
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        console.log('closes');
      }}
    >
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.content,
            backgroundColor: statusColor,
            transform: [{ translateY: translateYAnim }],
          }}
        >
          <View
            style={{
              ...Layout.row,
              ...Layout.alignItemsCenter,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                ...Layout.row,
                ...Layout.alignItemsCenter,
              }}
            >
              <View
                style={{
                  ...Layout.center,
                  width: 28,
                  height: 28,
                  backgroundColor: Colors.white,
                  borderRadius: 5,
                }}
              >
                <Image
                  source={ICONS.CheckSimple}
                  style={{
                    ...styles.icon,
                    tintColor: statusColor,
                  }}
                />
              </View>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: FontSize.regular,
                  marginLeft: 20,
                  fontWeight: '700',
                }}
              >
                {isSucess === true ? 'Tuyệt vời !!!' : 'Chưa chính xác !!!'}
              </Text>
            </View>

            <View
              style={{
                ...Layout.row,
                ...Layout.alignItemsCenter,
              }}
            >
              <Image
                style={{
                  ...styles.supportIcon,
                }}
                source={ICONS.Telegram}
              />
              <Image
                style={{
                  ...styles.supportIcon,
                }}
                source={ICONS.Messenger}
              />
              <Image
                style={{
                  ...styles.supportIcon,
                  marginRight: 0,
                }}
                source={ICONS.Info}
              />
            </View>
          </View>
          {correctAnswer && (
            <View
              style={{
                paddingTop: 30,
              }}
            >
              <Text
                style={{
                  fontWeight: '900',
                  color: Colors.white,
                  fontSize: 20,
                  marginBottom: 5,
                }}
              >
                Đáp án đúng:
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  color: Colors.white,
                  fontSize: 14,
                }}
              >
                {correctAnswer}
              </Text>
            </View>
          )}
          <Button
            type={'light'}
            active={true}
            text={isSucess === true ? 'Tiếp tục' : 'OK'}
            containerStyle={{
              marginTop: 40,
            }}
            textStyles={{
              color: statusColor,
            }}
            onPress={onButtonClick}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: '7.5%',
  },
  icon: {
    width: 14,
    height: 14,
  },
  supportIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.white,
    marginRight: 15,
  },
});

export default StatusBottomModal;

import * as React from 'react';
import { Alert, Image, Modal, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { ICONS } from '../../constant';
import { Colors, FontSize } from '../../theme/Variables';
import { Button } from '../common/Button';

interface IStatusBottomModalProps {
  status: 'success' | 'danger';
  onButtonClick: any;
  visible: boolean;
  correctAnswer?: string;
  onClose: any;
}

const StatusBottomModal: React.FunctionComponent<IStatusBottomModalProps> = ({
  status,
  correctAnswer,
  onButtonClick,
  visible,
  onClose,
}) => {
  const { Layout, Fonts } = useTheme();
  const isSucess = status === 'success' ? true : false;
  let statusColor = isSucess ? '#14d18e' : '#f75554';

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
        <View style={{ ...styles.content, backgroundColor: statusColor }}>
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
                {isSucess === true ? 'Tuyệt vời !!!' : 'Không chính xác !!!'}
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
                I walk and she swim.
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
            onPress={() => {}}
          />
        </View>
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

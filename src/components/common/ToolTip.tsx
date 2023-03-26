import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import AnimatedText from './AnimatedText';

export interface IToolTipProps {
  arrow: 'top' | 'left' | 'right' | 'bottom';

  text: string;
  containerStyle?: any;
}

function ToolTipDefault({ arrow, text, containerStyle }: IToolTipProps) {
  const { Fonts } = useTheme();
  let arrowStyle;
  switch (arrow) {
    case 'top':
      arrowStyle = styles.arrowTop;
      break;
    case 'left':
      arrowStyle = styles.arrowLeft;
      break;
    case 'right':
      arrowStyle = styles.arrowRight;
      break;
    case 'bottom':
      arrowStyle = styles.arrowBottom;
      break;
    default:
      arrowStyle = styles.arrowTop;
      break;
  }
  return (
    <View>
      <View style={{ ...styles.container, ...containerStyle }}>
        {/* <Text
          style={{
            ...Fonts.textSmall,
            ...Fonts.textSemiBold,
          }}
        >
          {' '}
          {text}
        </Text> */}
        <AnimatedText
          content={text}
          textStyle={{
            ...Fonts.textSmall,
            ...Fonts.textSemiBold,
          }}
          style={{}}
          duration={500}
        />
        <View style={arrowStyle}></View>
      </View>
    </View>
  );
}

const ToolTip = React.memo(ToolTipDefault);

export { ToolTip };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F8FA',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: '#EDEDEE',
    position: 'relative',
    maxWidth: 300,
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: -9,
    width: 15,
    borderRadius: 0,
    borderBottomLeftRadius: 5,
    height: 15,
    backgroundColor: '#F9F8FA',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EDEDEE',
    transform: [{ rotate: '45deg' }],
  },
  arrowTop: {
    position: 'absolute',
    left: '50%',
    top: -9,
    width: 15,
    borderRadius: 0,
    borderTopLeftRadius: 5,
    height: 15,
    backgroundColor: '#F9F8FA',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#EDEDEE',
    transform: [{ rotate: '45deg' }],
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: -9,
    width: 15,
    borderRadius: 0,
    borderTopRightRadius: 5,
    height: 15,
    backgroundColor: '#F9F8FA',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#EDEDEE',
    transform: [{ rotate: '45deg' }],
  },
  arrowBottom: {
    position: 'absolute',
    bottom: -9,
    left: '50%',
    width: 15,
    borderRadius: 0,
    borderBottomRightRadius: 5,
    height: 15,
    backgroundColor: '#F9F8FA',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#EDEDEE',
    transform: [{ rotate: '45deg' }],
  },
});

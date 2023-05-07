import * as React from 'react';

import { Animated, StyleSheet, View } from 'react-native';

export interface IAnimatedTextProps {
  content: string;
  textStyle?: any;
  style?: any;
  duration?: number;
  alwaysAminate?: boolean;
}

export function AnimatedText(props: IAnimatedTextProps) {
  const animatedValues: any = [];

  const oldText = React.useRef('');

  const textArr = props.content.trim().split(' ');

  textArr.forEach((_, i) => {
    animatedValues[i] = new Animated.Value(0);
  });

  const animated = (toValue = 1) => {
    const animations = textArr.map((_, i) => {
      return Animated.timing(animatedValues[i], {
        toValue,
        duration: props.duration!,
        useNativeDriver: true,
      });
    });

    Animated.stagger(props.duration! / 5, animations).start(() => {});
  };

  React.useEffect(() => {
    if (props.alwaysAminate) {
      animated();
    } else if (!props.alwaysAminate && props.content !== oldText.current) {
      oldText.current = props.content;
      animated();
    }
  });
  return (
    <View style={[props.style, styles.textWrapper]}>
      {textArr.map((word, index) => {
        return (
          <Animated.Text
            key={`${word}-${index}`}
            style={[
              props.textStyle,
              {
                opacity: animatedValues[index],
                position: 'relative',
                lineHeight: 22,
                transform: [
                  {
                    translateY:
                      props.content !== oldText.current
                        ? Animated.multiply(
                            animatedValues[index],
                            new Animated.Value(-3),
                          )
                        : -3,
                  },
                ],
              },
            ]}
          >
            {word}
            {`${index < textArr.length ? ' ' : ''}`}
          </Animated.Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingTop: 5,
  },
});

export default AnimatedText;

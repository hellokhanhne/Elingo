import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme/Variables';

export interface IButtonProps {
  containerStyle?: any;
  onPress?: () => any;
  text: string;
  type?: 'filled' | 'light' | 'outlined';
  active?: boolean;
  textStyles?: any;
  leftComponent?: any;
  shadownShown?: boolean;
}

export function Button({
  containerStyle,
  onPress,
  type = 'filled',
  text,
  active = true,
  textStyles,
  leftComponent,
  shadownShown = true,
}: IButtonProps) {
  const { Layout, Colors, Fonts } = useTheme();

  const btnStyle = active
    ? {
        backgroundColor:
          type === 'filled'
            ? Colors.primary
            : type === 'outlined'
            ? Colors.white
            : Colors.lightPrimary,
        ...(type === 'filled' && shadownShown ? styles.shadownButton : {}),
      }
    : {
        backgroundColor: type === 'filled' ? Colors.gray : Colors.lightGray,
      };

  const textStyle = active
    ? {
        color: type === 'filled' ? Colors.white : Colors.primary,
      }
    : {
        color: type === 'filled' ? Colors.white : Colors.gray,
      };

  return (
    <TouchableOpacity
      onPress={() => {
        if (active && onPress) {
          onPress();
        }
      }}
      style={{
        ...Layout.fullWidth,
        ...styles.container,
        ...Layout.center,
        ...btnStyle,
        ...containerStyle,
        ...(type === 'outlined'
          ? {
              borderWidth: 1.75,
              borderColor: Colors.primary,
            }
          : {}),
      }}
    >
      {leftComponent && leftComponent}
      <Text
        style={{
          ...Fonts.textUppercase,
          fontSize: 16,
          ...textStyle,
          ...textStyles,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 25,
  },
  shadownButton: {
    shadowColor: Colors.primary,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 3 },
    elevation: 5,
  },
});

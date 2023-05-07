import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme/Variables';

export interface IOptionCardProps {
  containerStyle?: any;
  textStyle?: any;
  icon?: any;
  title: string;
  active: boolean;
  changeTextVisiable?: boolean;
  onClick?: () => void;
  customIcons?: React.ReactNode;
  rightElement?: React.ReactNode;
  wrappeTextStyle?: any;
}

export function OptionCard({
  containerStyle,
  textStyle,
  active,
  title,
  icon,
  changeTextVisiable,
  onClick,
  customIcons,
  rightElement,
  wrappeTextStyle,
}: IOptionCardProps) {
  const { Fonts } = useTheme();
  const activeContainer = active ? styles.containerActive : {};

  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={{
          ...styles.container,
          ...containerStyle,
          ...activeContainer,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            ...wrappeTextStyle,
          }}
        >
          {icon && (
            <Image style={styles.icon} resizeMode="contain" source={icon} />
          )}
          {customIcons && customIcons}

          <Text
            style={{
              ...Fonts.textSemiBold,
              ...Fonts.textRegular,
              marginLeft: 20,
              flex: 1,
              ...textStyle,
            }}
          >
            {title}
          </Text>
          {rightElement && rightElement}
          {changeTextVisiable && (
            <Text
              style={{
                ...Fonts.textSmall,
                ...Fonts.textPrimary,
                ...Fonts.textSemiBold,
                ...textStyle,
              }}
            >
              Change
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 17.5,
    paddingVertical: 12.5,
    borderRadius: 18,
    backgroundColor: '#fff',
    borderColor: Colors.nomalGray,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 45,
    height: 45,
  },
  containerActive: {
    backgroundColor: '#F3F1FF',
    borderColor: Colors.primary,
    borderWidth: 3,
  },
});

import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme/Variables';

interface ITabProps {
  text: string;
  active: boolean;
  onClick : any
}

const Tab: React.FunctionComponent<ITabProps> = ({ active, text , onClick}) => {
  const { Layout, FontSize, Fonts } = useTheme();
  return (
    <TouchableOpacity
    onPress={onClick}
      style={[
        {
          height: 40,
          borderRadius: 20,
          ...Layout.center,
          flex: 1,
        },
        active && {
          backgroundColor: Colors.primary,
        },
        !active && {
          borderColor: Colors.primary,
          borderWidth: 1,
        },
      ]}
    >
      <Text
        style={[
          {
            fontSize: FontSize.small,
            ...Fonts.textBold,
            color: active ? Colors.white : Colors.primary,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;

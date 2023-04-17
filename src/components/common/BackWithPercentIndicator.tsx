import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ICONS, IMAGES } from '../../constant';
import { useTheme } from '../../hooks';
import { Colors, FontSize } from '../../theme/Variables';

export interface IBackWithPercentIndicatorProps {
  percent?: number;
  onBack?: () => void;
  isShowPercentIndicator?: boolean;
  containerStyle?: any;
}

const BackWithPercentIndicator = ({
  onBack,
  isShowPercentIndicator = true,
  percent,
  containerStyle,
}: IBackWithPercentIndicatorProps) => {
  const { Fonts } = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      <TouchableOpacity onPress={onBack}>
        <Image style={styles.image} source={ICONS.Back} resizeMode="contain" />
      </TouchableOpacity>
      {isShowPercentIndicator && (
        <View style={styles.percentContainer}>
          <View style={styles.percentContent}>
            <View
              style={{
                ...styles.percentContentActive,
                width: `${percent}%`,
              }}
            ></View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '10%',
    flexDirection: 'row',
    height: 30,

    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  percentContainer: {
    flex: 1,
    height: 15,
    marginLeft: '15%',
  },

  percentContent: {
    flex: 1,
    backgroundColor: '#EFEEEE',
    borderRadius: 10,
    position: 'relative',
  },
  percentContentActive: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    position: 'absolute',

    left: 0,
    top: 0,
    bottom: 0,
  },
});

export default BackWithPercentIndicator;

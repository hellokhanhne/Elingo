import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../theme/Variables';

interface ILevelIconProps {
  level: number;
}

const LevelIcon = ({ level }: ILevelIconProps) => {
  const styleDiv1 = [1, 2, 3].includes(level) ? styles.active : {};
  const styleDiv2 = [2, 3].includes(level) ? styles.active : {};
  const styleDiv3 = [3].includes(level) ? styles.active : {};

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            ...styles.div1,
            ...styleDiv1,
          }}
        ></View>
        <View
          style={{
            ...styles.div2,
            ...styleDiv2,
          }}
        ></View>
        <View
          style={{
            ...styles.div3,
            ...styleDiv3,
          }}
        ></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 27,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  div1: {
    width: 8,
    borderRadius: 4,
    marginRight: 3,
    height: 8,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  div2: {
    width: 8,
    borderRadius: 4,
    marginRight: 3,
    height: 16,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  div3: {
    width: 8,
    borderRadius: 4,
    height: 24,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  active: {
    backgroundColor: Colors.primary,
  },
});

export default LevelIcon;

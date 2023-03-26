import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../theme/Variables';

interface IDevideLineProps {
  style?: any;
}

const DevideLine: React.FunctionComponent<IDevideLineProps> = props => {
  return (
    <View
      style={{
        ...styles.container,
        ...props.style,
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.lightPrimary,
  },
});

export default DevideLine;

import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../../hooks';
import { Colors } from '../../../../theme/Variables';
import { ICONS } from '../../../../constant';

interface ILessionProps {}

const Lession: React.FunctionComponent<ILessionProps> = props => {
  const { Fonts } = useTheme();
  return (
    <View>
      <LinearGradient
        colors={['#fe8896', '#ff646c']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headContainer}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              color: Colors.white,
              ...Fonts.textBold,
              marginBottom: 5,
            }}
          >
            Cửa 1
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.white,
            }}
          >
            Gọi đồ uống, giới thiệu bản thân
          </Text>
        </View>
        <View style={styles.headRight}>
          <Image
            style={{ ...styles.icon, tintColor: '#fe8896' }}
            source={ICONS.Document}
          />
        </View>
      </LinearGradient>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  headRight: {
    width: 50,
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Lession;

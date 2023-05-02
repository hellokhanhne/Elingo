import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackWithPercentIndicator from '../../components/common/BackWithPercentIndicator';
import { Button } from '../../components/common/Button';
import { ICONS } from '../../constant';
import { useTheme } from '../../hooks';
import StepContainer from './components/LessionComponent/StepContainer';
import { useGetOneLession } from '../../api/lession';

export interface ILessionScreenProps {
  route: any;
}

export function LessionScreen(props: ILessionScreenProps) {
  const { Layout, Fonts, Colors } = useTheme();
  const navigate = useNavigation();
  const { params } = props.route;
  const { data } = useGetOneLession(params.id, {});
  // console.log(data);

  return (
    <>
      <View
        style={{
          ...styles.container,
        }}
      >
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View>
          <BackWithPercentIndicator
            onBack={() => navigate.navigate('Home' as never)}
            customLeftIcon={ICONS.Close}
            customIconStyle={{
              width: 15,
              height: 15,
            }}
            percent={10}
            isShowPercentIndicator={true}
            containerStyle={{
              paddingHorizontal: '7.5%',
            }}
            rightComponent={
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <Image
                  source={ICONS.Diamond}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    fontWeight: '900',
                    color: '#212121',
                  }}
                >
                  957
                </Text>
              </View>
            }
          />
        </View>
        {/* body  */}
        <ScrollView
          style={{
            ...Layout.fill,
          }}
        >
          <StepContainer />
        </ScrollView>
        {/* bottom  */}
        <View style={styles.bottomContainer}>
          <Button
            text="Kiểm Tra Đáp Án"
            textStyles={{
              textTransform: 'none',
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '11%',
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#F5F5F5',
    borderTopWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: '10%',
    paddingVertical: '5.5%',
    paddingBottom: '7.5%',
  },
});

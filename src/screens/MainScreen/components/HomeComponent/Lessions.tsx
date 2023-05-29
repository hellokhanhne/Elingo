import * as React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../../hooks';
import { Colors } from '../../../../theme/Variables';
import { ANIMATIONS, ICONS, IMAGES } from '../../../../constant';
import { ILession, IPart } from '../../../../types';
import { PrimaryToolTip, ToolTip } from '../../../../components/common/ToolTip';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../../../hooks/store';
import { setCurrentLessionId } from '../../../../store/lession';
interface ILessionProps {
  part: IPart;
  index: number;
}

const getIconsByType = (type: string) => {
  switch (type) {
    case 'write':
      return ICONS.Pencil;
    case 'speak':
      return ICONS.Mic;
    case 'hear':
      return ICONS.Sound;
    case 'choice':
      return ICONS.Book;
    case 'mix':
      return ICONS.Cup;
    default:
      return ICONS.Book;
  }
};

const StartToolTip = () => {
  const [translateY] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [translateY]);
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: '-35%',
        zIndex: 2,
        transform: [
          {
            translateY: translateY,
          },
        ],
      }}
    >
      <PrimaryToolTip
        containerStyle={{
          width: 130,
        }}
        arrow="bottom"
      ></PrimaryToolTip>
    </Animated.View>
  );
};

const Lession = ({
  lession,
  index,
  contentStyle,
  parentIndex,
}: {
  lession: ILession;
  contentStyle: any;
  index: number;
  parentIndex: number;
}) => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  let img: any;
  let check: any;
  if (index === 0 && !lession.isCompleted) {
    img = IMAGES.NodePrimary;
    check = 2;
  } else {
    img = lession.isCompleted
      ? IMAGES.NodeOrange
      : lession.prevCompleted
      ? IMAGES.NodePrimary
      : IMAGES.NodeSecondary;
    check = lession.isCompleted ? 1 : lession.prevCompleted ? 2 : 3;
  }

  const handlePress = () => {
    dispatch(setCurrentLessionId(lession.id));
    if (check === 2) {
      navigation.navigate(
        'LessionScreen' as never,
        {
          id: lession.id,
        } as never,
      );
    }
  };

  return (
    <View style={{ ...styles.lession }}>
      <TouchableOpacity
        style={{
          ...contentStyle,
        }}
        onPress={handlePress}
      >
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}
        >
          {index === 2 && parentIndex % 2 === 0 && (
            <View
              style={{
                width: 200,
                height: 230,
                position: 'absolute',
                justifyContent: 'flex-start',
                left: '-250%',
                bottom: '-20%',
              }}
            >
              <AnimatedLottieView
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={ANIMATIONS.GreetingAnimation}
                autoPlay={true}
                resizeMode="cover"
              />
            </View>
          )}

          {index === 2 && parentIndex % 2 !== 0 && (
            <View
              style={{
                width: 200,
                height: 300,
                position: 'absolute',
                justifyContent: 'flex-start',
                left: '100%',
                bottom: '-60%',
              }}
            >
              <AnimatedLottieView
                style={{
                  width: '105%',
                  height: '105%',
                }}
                source={ANIMATIONS.Drink}
                autoPlay={true}
                resizeMode="contain"
              />
            </View>
          )}
          {check === 2 && <StartToolTip />}
          <Image
            style={{
              ...styles.lessionImg,
            }}
            source={img}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 10,
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor:
                  check == 3
                    ? '#afafaf'
                    : check == 1
                    ? '#cc7900'
                    : Colors.white,
              }}
              source={
                check == 1
                  ? ICONS.Check
                  : check == 2
                  ? ICONS.Star
                  : getIconsByType(lession.type)
              }
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Lessions: React.FunctionComponent<ILessionProps> = ({ part, index }) => {
  const { Fonts } = useTheme();
  let marginLeft = 0;
  let dimemsion = index % 2 === 0;
  return (
    <View>
      <LinearGradient
        colors={part.titleBackground}
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
            {part.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.white,
            }}
          >
            {part.title}
          </Text>
        </View>
        <View style={styles.headRight}>
          <Image
            style={{ ...styles.icon, tintColor: part.titleBackground[0] }}
            source={ICONS.Document}
          />
        </View>
      </LinearGradient>

      <View
        style={{
          paddingVertical: 10,
        }}
      >
        {part.lessions?.map((l, i) => {
          if (i === 0) {
            marginLeft = 0;
          } else if (marginLeft < 240 && dimemsion) {
            marginLeft = marginLeft + 120;
            if (marginLeft === 240) {
              dimemsion = !dimemsion;
            }
          } else if (marginLeft <= 240 && !dimemsion) {
            marginLeft = marginLeft - 120;
            if (marginLeft === -240) {
              dimemsion = !dimemsion;
            }
          }

          return (
            <Lession
              parentIndex={index}
              key={l.id}
              contentStyle={{
                marginLeft: marginLeft,
              }}
              index={i}
              lession={{
                ...l,
                prevCompleted: part.lessions[i - 1]?.isCompleted,
              }}
            />
          );
        })}
      </View>
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
  lession: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
    alignItems: 'center',
  },
  lessionImg: {
    width: 100,
    height: 100,
  },
});

export default Lessions;

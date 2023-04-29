import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../../hooks';
import { Colors } from '../../../../theme/Variables';
import { ICONS, IMAGES } from '../../../../constant';
import { ILession, IPart } from '../../../../types';

interface ILessionProps {
  part: IPart;
}

let dimemsion = true;

const getIconsByType = (type: string) => {
  console.log(type);
  switch (type) {
    case 'write':
      return ICONS.Pencil;
    case 'speak':
      return ICONS.Mic;
    case 'hear':
      return ICONS.Sound;
    case 'choice':
      return ICONS.Book;
    default:
      return ICONS.Book;
  }
};

const Lession = ({
  lession,
  index,
  contentStyle,
}: {
  lession: ILession;
  contentStyle: any;
  index: number;
}) => {
  let img: any;
  if (index === 0 && !lession.isCompeleted) {
    img = IMAGES.NodePrimary;
  } else {
    img = lession.isCompeleted
      ? IMAGES.NodeOrange
      : lession.prevCompleted
      ? IMAGES.NodePrimary
      : IMAGES.NodeSecondary;
  }

  return (
    <View style={{ ...styles.lession }}>
      <TouchableOpacity
        style={{
          ...contentStyle,
        }}
      >
        <View
          style={{
            position: 'relative',
          }}
        >
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
                tintColor: img == 49 ? '#afafaf' : Colors.white,
              }}
              source={
                img == 48
                  ? ICONS.Check
                  : img == 47
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

const Lessions: React.FunctionComponent<ILessionProps> = ({ part }) => {
  const { Fonts } = useTheme();
  let marginLeft = 0;
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
            {part.partName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.white,
            }}
          >
            {part.partTitle}
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
              contentStyle={{
                marginLeft: marginLeft,
              }}
              index={i}
              lession={{
                ...l,
                prevCompleted: part.lessions[i - 1]?.isCompeleted,
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

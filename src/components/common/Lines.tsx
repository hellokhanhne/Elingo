import { StyleSheet, View } from 'react-native';
import { Colors } from '../../theme/Variables';

function Lines(props: any) {
  const {
    containerHeight,
    containerStyle,
    numLines,
    lineHeight,
    lineStyle,
    renderTopLine = true,
  } = props;
  const arr = new Array(numLines).fill(0);

  return (
    <View
      style={[
        {
          height: containerHeight,
        },
        containerStyle,
      ]}
    >
      {arr.map((_, idx) => (
        <View
          key={`line.${idx}`}
          style={[
            { height: lineHeight },
            styles.line,
            idx === 0 && renderTopLine && styles.firstLine,
            lineStyle,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  line: { borderBottomWidth: 2, borderBottomColor: Colors.lightPrimary },
  firstLine: { borderTopWidth: 2, borderTopColor: Colors.lightPrimary },
});

export default Lines;

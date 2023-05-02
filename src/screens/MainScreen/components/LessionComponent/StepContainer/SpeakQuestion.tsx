import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Voice from '@react-native-voice/voice';

interface ISpeakQuestionProps {}

const SpeakQuestion: React.FunctionComponent<ISpeakQuestionProps> = props => {
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  React.useEffect(() => {
    (async () => {
      Voice.onSpeechError = onSpeechError;
      Voice.onSpeechResults = onSpeechResults;
    })();
    return () => {
      Voice.destroy().then(() => Voice.removeAllListeners());
    };
  }, []);

  const startSpeechToText = async () => {
    await Voice.start('en-US');
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = async (result: any) => {
    setResults(result.value);
    await stopSpeechToText();
  };

  const onSpeechError = (error: any) => {
    console.log(error);
  };
  return (
    <View style={styles.container}>
      {!started ? (
        <Button title="Start Speech to Text" onPress={startSpeechToText} />
      ) : undefined}
      {started ? (
        <Button title="Stop Speech to Text" onPress={stopSpeechToText} />
      ) : undefined}
      <Text> {results.length > 0 && results[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpeakQuestion;

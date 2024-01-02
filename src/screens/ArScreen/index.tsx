import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Webview from 'react-native-webview';

const ARMode = () => {
  const navination = useNavigation();
  const handleMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    const { action } = data;
    if (action === 'back') {
      navination.navigate('Home');
    }
  };
  return (
    <Webview
      source={{
        uri: 'https://x0vp0.zappar.io/4192883167005546305/7/',
      }}
      onMessage={handleMessage}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      webviewDebuggingEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={false}
      allowsAirPlayForMediaPlayback={true}
      allowFileAccessFromFileURLs={true}
      allowUniversalAccessFromFileURLs={true}
    />
  );
};

export default ARMode;

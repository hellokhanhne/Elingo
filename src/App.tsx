import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ApplicationNavigator from './navigators/Application';
import { persistor, store } from './store';
import './translations';
import ChatContextProvider from './context/ChatContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const queryClient = new QueryClient();
  Sound.setCategory('Playback', true);

  return (
    <>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            {/**
             * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
             * and saved to redux.
             * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
             * for example `loading={<SplashScreen />}`.
             * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
             */}
            <PersistGate loading={null} persistor={persistor}>
              <ApplicationNavigator />
            </PersistGate>
          </Provider>
          <Toast />
        </QueryClientProvider>
      </GestureHandlerRootView>
      {/* Your app code goes here */}
    </>
  );
};

export default App;

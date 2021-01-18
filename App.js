import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Updater from './src/startup/Updater';

const PUBLISH_ID = 1

const App = () => {
  return (
    <>
      <Updater/>
      <View style={styles.constainer}>
        <Text>
          Current release ID: {PUBLISH_ID}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  constainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default App;

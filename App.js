import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Search from './src/screens/search';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Search />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

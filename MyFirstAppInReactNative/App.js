import React from 'react';
import { NavigatorIOS, StyleSheet, } from 'react-native';
import HomePage from './components/HomePage';

export default class Start extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomePage,
          title: 'React-native practice',
        }}
        style={styles.container}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

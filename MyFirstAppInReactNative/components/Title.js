import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Title = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>PropertyCross</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingTop: 25,
      paddingBottom: 5,
    },
    text: {
      color: '#ff9933',
      fontSize: 18,
      fontWeight: '800',
    },
});

export default Title;

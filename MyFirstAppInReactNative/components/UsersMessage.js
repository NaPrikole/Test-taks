import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const UsersMessage = () => {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Use the form below to search for houses to
                buy. You can search by place-name, postcode
                or click "My location", to search your current
                location</Text>
            </View>
        );
    };


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    text: {
      color: '#6699ff',
      fontStyle: 'italic',
    },
});

export default UsersMessage;
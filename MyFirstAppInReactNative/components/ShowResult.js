import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class ShowResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Search #1 (112)</Text>
                <Text>Search #2 (11)</Text>
                <Text>Search #3 (2)</Text>
                <Text>Search #4 (21)</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ccc',
    },
});
export default ShowResult;

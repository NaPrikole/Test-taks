import React, {Component} from 'react';
import {StyleSheet, Image, View, Text,} from 'react-native';

class OverView extends Component {

  render() {
    let own = this.props.property;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: own.img_url}} />
        <View style={styles.adress}>
          <Text style={styles.title}>{own.title}</Text>
          <View style={styles.hr}/>
        </View>
        <Text style={styles.description}>{own.summary}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#ff9933',
    flex: 1,
    width: '100%',
  },
  adress: {
    backgroundColor: '#000',
  },
  title: {
    fontStyle: 'italic',
    margin: 10,
    color: '#ff9933',
    fontSize: 25,
  },
  description: {
    fontStyle: 'italic',
    fontSize: 20,
    margin: 10,
    color: '#ff9933'
  },
  hr: {
    height: 1,
    backgroundColor: '#6699ff',
  },
});

export default OverView;
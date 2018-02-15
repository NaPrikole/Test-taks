import React, {Component} from 'react';
import { StyleSheet, Image, View, TouchableHighlight, ListView, Text, } from 'react-native';
import OverView from './OverView';

class DisplayData extends Component {

  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  tapItem() {
    let description = this.props.listings[Math.floor(Math.random() * 10)];
    this.props.navigator.push({
      title: "Description",
      component: OverView,
      passProps: {property: description}
    });
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight onPress={() => this.tapItem(rowData.guid)}>
        <View>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: rowData.img_url }} />
            <View  style={styles.text}>
              <Text style={styles.price}>{rowData.price_formatted}</Text>
              <Text style={styles.title}
                    numberOfLines={1}>{rowData.title}</Text>
            </View>
          </View>
          <View style={styles.hr}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    padding: 10,
  },
  image: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ff9933',
    marginRight: 15,
    height: 75,
    width: 75,
  },
  price: {
    color: '#6699ff',
    fontStyle: 'italic',
    fontSize: 28,
    fontWeight: 'bold',
   },
  text: {
    flex: 1
  },
  title: {
    fontSize: 20,
    color: '#ff9933'
  },
  hr: {
    height: 1,
    backgroundColor: '#6699ff'
  },

});

export default DisplayData;

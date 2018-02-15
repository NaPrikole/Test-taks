import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button, ActivityIndicator, Text, TouchableHighlight } from 'react-native';
import DisplayData from './DisplayData';
import UsersMessage from './UsersMessage';
import Title from './Title';

function recentQuery(key, value, pageNumber) {
  let list = { encoding: 'json', action: 'search_listings', listing_type: 'buy', page: pageNumber, country: 'India', pretty: '1'}
  list[key] = value;
  let query = Object.keys(list).map(key => key + '=' + encodeURIComponent(list[key])).join('&');
  return 'https://api.nestoria.in/api?' + query;
}

class SearchForm extends Component {
    constructor(props) {
      super(props);
        this.state = {
          staticSearch: 'Bangalore',
          isLoading: false,
          message: '',
          countResults: 'Here will be results...',
        };

    }

    startSearch(tap) {
        this.setState({
          staticSearch: tap.nativeEvent.text
        })
    }

    getQuery(response) {
      this.setState({ isLoading: false , message: '' });
      if (response.application_response_code.substr(0, 1) === '1') {
        this.props.navigator.push({
          title: 'India',
          component: DisplayData,
          passProps: {listings: response.listings}
        });
      } else {
        this.setState({ message: 'Location not recognized; please try again.'});
      }
    }

    startQuery(query) {
        this.setState({ isLoading: true });
        fetch(query)
          .then(response => response.json())
          .then(json => this.getQuery(json.response))
          .catch(error =>
            this.setState({
              isLoading: false,
              message: 'Query is fail ' + error
            }));
      }

    doneSearch() {
      let query = recentQuery('place_name', this.state.staticSearch, 1);
      this.startQuery(query);
    }

    getCount(response) {
      this.setState({ isLoading: false , message: '' });
      if (response.application_response_code.substr(0, 1) === '1') {
        this.setState({ countResults: "You have - " + response.listings.length + " results. Tap..."});
      } else {
        this.setState({ message: 'Location not recognized; please try again.'});
      }
    }

    startQueryTest(query) {
      this.setState({ isLoading: true });
      fetch(query)
        .then(response => response.json())
        .then(json => this.getCount(json.response))
        .catch(error =>
          this.setState({
            isLoading: false,
            countResults: 0,
            message: 'Query is fail ' + error
          }));
    }

    countSearch() {
      let query = recentQuery('place_name', this.state.staticSearch, 1);
      this.startQueryTest(query);
    }

    showMyCoordinates() {
      navigator.geolocation.getCurrentPosition(
        location => {
          let coordinats = location.coords.latitude.toFixed(4) + ' and ' + location.coords.longitude.toFixed(4);
          alert("Your coordinats "  + coordinats);
        }
      );
    }

    render() {
        let spinner = this.state.isLoading ? ( <ActivityIndicator  size='large'/> ) : ( <View/>);
        return (
            <View style={styles.maincontainer}>
              <Title />
              <UsersMessage />
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type here to search..."
                        value = {this.state.staticSearch}
                        onChange={this.startSearch.bind(this)}
                    />
                </View>
                <View style={styles.buttonsLine}>
                    <View style={styles.buttonGo}>
                    <Button
                      onPress={this.countSearch.bind(this)}
                        title="Go"
                    />
                    </View>
                    <View style={styles.buttonMyLocation}>
                    <Button
                      onPress={this.showMyCoordinates.bind(this)}
                        title="My location"
                    />
                    </View>
                </View>
                {spinner}
               <View>
                    <Text style={styles.message}>{this.state.message}</Text>
               </View>
              <TouchableHighlight style={styles.touchableHighlight}
                onPress={this.doneSearch.bind(this)}>
                <Text style={styles.textCount}>{this.state.countResults}</Text>
              </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  maincontainer: {
    paddingTop: 45,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#000',
    flex: 1,
  },
    container: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        height: 50,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#6699ff',
        backgroundColor: '#333',
    },
    buttonsLine: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    buttonGo: {
      flex: 1,
      marginRight: 40,
      backgroundColor: '#333',
      borderColor: '#ff9933',
      borderWidth: 3,
      borderRadius: 8,
    },
    buttonMyLocation: {
      flex: 3,
      backgroundColor: '#333',
      borderColor: '#ff9933',
      borderWidth: 3,
      borderRadius: 8,
    },
    message: {
      fontSize: 20,
      color: '#ff9933',
      marginTop: 15,
      marginBottom: 15,
      fontStyle: 'italic',
    },
    textInput: {
      color: '#ff9933',
      fontWeight: '800',
      fontStyle: 'italic',
      fontSize: 20,
    },
    textCount: {
      fontSize: 20,
      color: '#ff9933',
      fontStyle: 'italic',
      borderColor: '#6699ff',
      borderWidth: 3,
      borderRadius: 8,
      padding: 20,
    },
    touchableHighlight: {
      backgroundColor: '#333',
    },
});

export default SearchForm;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import getRest from './src/rest';

class ScrollableTabViewExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tab0: {},
      tab1: {}
    }
  }

  getREST(tabidx) {
    return fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((responseData) => {
        return responseData;
      });
    console.log('tabidx:', tabidx)
  }

  componentDidMount() {
    this.getREST()
    console.log('children', this.props)
  }

  render() {
    console.log('render');
    return (
      <ScrollableTabView
        style={{marginTop: 20 }}
        onChangeTab={(key) => {
          this.getREST(key)
            .then(responseData => {
              console.log(key, responseData)
              this.setState({ [`tab${key.i}`]: responseData });
            })
        }}
        renderTabBar={() => <DefaultTabBar />}
      >
        <View tabLabel='Tab #1'><Text>{JSON.stringify(this.state.tab0.results)}</Text></View>
        <Text tabLabel='Tab #2'>favorite</Text>
        <Text tabLabel='Tab #3'>project</Text>
        <Text tabLabel='Tab #4'>foo</Text>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ScrollableTabViewExample', () => () => <ScrollableTabViewExample />);

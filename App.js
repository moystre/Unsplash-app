import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // Setting the loading to 'true' on default
      isLoading: true
    };
    this.loadImages = this.loadImages.bind(this)
  }

  // fetching images (empty url for now)  
  loadImages() {
    axios
      .get('')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log('request completed');
      });
  }

  // when the app starts running, the images will be fetched from Unsplash API
  componentDidMount() {
    this.loadImages()
  }

  render() {
    // The loader will only be displayed when isLoading is 'true'
    return this.state.isLoading ? (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator size="large" color="blue" />
      </View>
    ) :
      (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

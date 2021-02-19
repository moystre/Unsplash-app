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
    // using Unsplash Endpoint with max of 30 images
    axios.get('https://api.unsplash.com/photos/random?count=30&client_id=r9QQ5ZdF7Qp7E4gFNDxRfKAZQ07Ag4i_B-RA1mooxkc')
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

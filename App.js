import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import axios from 'axios';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // Setting the loading to 'true' on default
      isLoading: true,
      images: []
    };
    this.loadImages = this.loadImages.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  // fetching images
  loadImages() {
    // using Unsplash Endpoint with max of 30 images
    axios.get('https://api.unsplash.com/photos/random?count=30&client_id=r9QQ5ZdF7Qp7E4gFNDxRfKAZQ07Ag4i_B-RA1mooxkc')
      .then(function (response) {
        console.log(response.data);
        // once the data is retrieved, the state needs to be updates and loader hidden
        this.setState({ images: response.data, isLoading: false });
      }.bind(this))
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

  renderItem(image) { }

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
      // when loading is completed the items are passed to the FlatList
      (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <FlatList
            horizontal
            pagingEnabled // for swiping each image separately
            data={this.state.images}
            renderItem={(({ item }) => this.renderItem(item))} // passing each item into the FlatList
          />
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

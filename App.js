/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

class App extends Component {
  state = {
    avatar: ''
  }

  addImage = () => {
    ImagePicker.showImagePicker( {
      title: 'Choose your photo',
      takePhotoButtonTitle: 'Take a pretty one',
      chooseFromLibraryButtonTitle: 'Select an old one',
      cancelButtonTitles: 'Just go back',
    }, (response) => {
      this.setState({
        avatar: response.uri
      })
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{uri:this.state.avatar}}
          style={styles.avatar}
        />

        <Button
          title="Add an Image"
          onPress={ () => this.addImage()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;

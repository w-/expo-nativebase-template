import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Root } from 'native-base'

import Preload from './constants/Preload'

import RootNavigation from './navigation/RootNavigation';




export default class App extends React.Component {
  constructor(props){
    super(props);
    this.dbInitSuccess = this.dbInitSuccess.bind(this);
    this.dbInitFail = this.dbInitFail.bind(this);

    this.state = {
      assetsAreLoaded: false,
      dbReady:false,
    };
    this.db = null
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  dbInitSuccess(){
    console.log('Database Ready');
    this.setState({dbReady: true});
  }

  dbInitFail(err){
    let errMsg = `Database Init error: ${err}`;
    console.error(errMsg)
    throw new Error(errMsg)
  }


  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <Root>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
        </Root>
      );
    }
  }

  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Asset.loadAsync([...Preload.Images]),
        Font.loadAsync([...Preload.Fonts]),
      ]);
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

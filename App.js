
import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview-master';
export default class MainActivity extends Component {
      render() {        
        return (
          <WebView 
          style={styles.WebViewStyle} 
          source={{uri: 'https://myloginpage.auth.us-east-2.amazoncognito.com/login?client_id=2sf84ht9g063iqml3tnu3uufei&response_type=code&scope=email+openid+phone&redirect_uri=https://myloginpage.auth.us-east-2.amazoncognito.com/'}} 
          javaScriptEnabled={true}
          domStorageEnabled={true}  />
        );
      }
    }
const styles = StyleSheet.create(
{
 WebViewStyle:
 {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    marginTop: (Platform.OS) === 'android' ? 20 : 0
 }
});


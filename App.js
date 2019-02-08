import React, {Component} from 'react';
import Header from './src/components/Header'
import { View, Text} from 'react-native'
import Post from './src/components/Post'

export default class App extends React.Component {
  render() {
    const comments = [{
      nickname: 'Joana Elena Silva',
      comment: 'Excelent Foto!'
    },{
    nickname: 'Lenon Ricardo',
    comment: 'Horrível!'
    }]

    return (
      <View style={{flex:1}}>
        <Header/>
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments}/>
      </View>
    );
  }
}



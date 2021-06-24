import React, { Component } from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'


export default class Autor extends Component {
    render() {
         
        return (
            <View className ="Autor" style = {styles.Autor}>
                <Text>
                Created by:  {this.props.quiz.author ? this.props.quiz.author.username : <Text>"no tiene autor"  </Text> }
                
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    Autor:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      fotoAuthor:{
       
        padding: 0,
        paddingLeft: 5
      }
});
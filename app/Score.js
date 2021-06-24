import React, { Component } from 'react'
import Button from './Button'
import { View, Text,StyleSheet } from 'react-native'

export default class Score extends Component {
    render() {
        return (
            <View className = "score" style={styles.score}>
                <Text> Su Puntuación es de : {this.props.score}</Text>
               
                <Button name = {"Volver a Jugar"} click = {this.props.iniciaJuego} style={styles.button} ></Button>

            </View>
        )
    }
}



const styles = StyleSheet.create({

    score:{
        height: 600,
       flex:1,
       alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
      },

     

     



})

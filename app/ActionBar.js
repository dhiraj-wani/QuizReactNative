
import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import Button from './Button'

export default class ActionBar extends Component {
    render() {
        return (
            <View className ="ActionBar" style={styles.ActionBar}>
                <Button name = {"RESET"} click = {this.props.iniciaJuego}></Button>
                <Button name = {"SUBMIT"} click = {this.props.submitAnswers}></Button>
                <Button name = {"PREVIOUS"}  click = {this.props.previousQuestion} disabled = {this.props.currentQuiz === 0 ? true : false}></Button>
                <Button name = {"NEXT"} click = {this.props.nextQuestion} disabled = {this.props.lastQuiz === this.props.currentQuiz ? true : false}></Button>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({

    ActionBar:{
        flex:1,
        flexDirection: 'column-reverse',
        justifyContent: 'space-evenly',
        alignContent:'space-around',
        height: 120,
        bottom: 0,
        
    }
    
});
import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default class Navbar extends Component {
    render() {
        return (
            <View className = "navBar" style={styles.navBar}>
            <Text  style = {styles.text}> QUIZ game  </Text>
            <Text> Tiempo :{this.props.time}</Text>
             
            
                </View>
        )
    }
}

const styles = StyleSheet.create({

    navBar:{
        
        paddingBottom: 5,
        backgroundColor: 'grey',
        flex: 1,
       justifyContent: 'center',
       justifyContent: 'space-around',
       width: '100%',
       
       
    
    },

    text:{
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
    }

})


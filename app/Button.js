

import React, { Component } from 'react'
import { TouchableHighlight,Text,StyleSheet } from 'react-native'

export default class Button extends Component {
    render() {
        return (

        <TouchableHighlight disabled={this.props.disabled} onPress={this.props.click}  >
            <Text style={styles.button}>
            {this.props.name}
            </Text>
            </TouchableHighlight>
        )
    }
}



const styles = StyleSheet.create({

    button:{
        flex:1,
        color: 'white',
        backgroundColor: 'red',
        justifyContent : 'space-around',
        marginBottom:5
        
      },
      
});

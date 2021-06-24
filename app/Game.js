import React, { Component } from 'react'
import Autor from './Autor';
import {TouchableHighlight, Text, View, Image, TextInput, StyleSheet} from 'react-native'
import ActionBar from './ActionBar';
export default class Game extends Component {


    answer = (e) => {
        let letraTecleada = e;
        this.props.onQuestionAnswer(letraTecleada);
      };

    render() {
        
        return (
            
        <View className = "Juego" style = {styles.Juego}>
            <View className="continer" style = {styles.continer}>
                <View className = "CapyAuthor" style = {styles.CapyAuthor}>
                    {this.props.quiz.attachment ?  <Image source= {{uri : this.props.quiz.attachment.url}} alt="Imagen" className="fotoCapital"  style = {styles.fotoCapital}/> : <Text>No hay Imagen</Text>}
                    <Autor quiz={this.props.quiz} />
                </View>
                
                
                
                <View className = "PreguntayInput" style = {styles.PreguntayInput}>
                    <Text className = "currentQuiz" style = {styles.currentQuiz}> Question {this.props.currentQuiz + 1 }</Text>
                   
                    <View className = "Pregunta" style = {styles.Pregunta}>
                      <Text>
                        {this.props.quiz.question}
                        </Text>
                    </View>
                
                    <TextInput  style = {styles.input}
                        value = {this.props.quiz.userAnswer || ''}
                        onChangeText={this.answer}/>

                           
                </View>
                    

                </View>
            
            
                <View>
                <ActionBar nextQuestion = {this.props.nextQuestion}
                           previousQuestion = {this.props.previousQuestion}
                            currentQuiz = {this.props.currentQuiz}
                            lastQuiz = {this.props.quizzLength - 1}
                            submitAnswers = {this.props.submitAnswers}
                            iniciaJuego = {this.props.iniciaJuego}
                           
                        
                        
                />
                </View>
                
              


                

            </View>
        );
    }
}

const styles = StyleSheet.create({

    Juego: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center'
        
      },

      continer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        justifyContent: 'center',
        
      },

      CapyAuthor:{
        
      },

      PreguntayInput:{
        flex:1,
        flexDirection: 'column',
        paddingTop: 30 
      },

      currentQuiz:{
        flex:1,
        fontWeight: '200',
        color: 'red'
      },


      Pregunta:{
        fontSize:15,
        fontWeight: '400',
        color: 'black'
      },

      fotoCapital:{
        
        width: 300,
        height: 200,
        marginTop: 70,
        borderRadius: 10
      },

      input:{
        padding: 12,
        margin: 8,
       backgroundColor:'black',
        color:'white',
        borderRadius: 4,
       
      }



      


})




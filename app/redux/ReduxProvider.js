import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import React from 'react';
import {View} from 'react-native'
import GameScreen from '../GameScreen';
import {quizzes} from '../assets/mock-data'


export default class ReduxProvider extends React.Component {
    constructor(props) {
    super(props);
    this.initialState = { 
            score: 0,
            finished: false,
            currentQuiz: 0,
            quizzes: [...quizzes], 
            time : 100
    };

    this.store = this.configureStore();
    }

    render() {
        return (    
            <Provider store={ this.store }>
                <View style={{height: '100%'}}>
                    <GameScreen/>
                </View>
            </Provider>
        );
    }


    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}
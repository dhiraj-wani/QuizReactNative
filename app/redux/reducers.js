
import { combineReducers } from 'redux';
import {QUESTION_ANSWER,CHANGE_QUIZ,SUBMIT, INIT_QUIZZES, TIMER, START_TIMER} from './actions'

function score(state = 0, action = {}) {
        switch(action.type) {
            case SUBMIT:
                    let score = 0;
                    action.payload.quizzes.map((quiz)=>{
                       if(quiz.userAnswer === quiz.answer) {
                           score = score + 1;
                           return score
                       }
                        return score
                    })
                return score

            case INIT_QUIZZES :
                return 0   
        default:
        return state;
        }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            
            return true;
        case INIT_QUIZZES:
            return false;    
    default:
    return state;
    }
}

function currentQuiz(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUIZ: 
            return action.payload.index;
        case INIT_QUIZZES:
            return state    
    default:
    return state;
    }
}

function quizzes(state = [] , action = {}) {
    switch(action.type) {
    case QUESTION_ANSWER:
        return state.map((quiz,i) => {
            return {...quiz, 
                userAnswer: action.payload.index === i ? action.payload.answer : quiz.userAnswer
            }
        });

     case INIT_QUIZZES:
         return   JSON.parse(JSON.stringify(action.payload.quizzes))
    default:
    return state;
    }

    

}


function time(state = 100, action = {}){
        switch(action.type){
            case INIT_QUIZZES:
            case SUBMIT:
            case START_TIMER:
                return 100;
            case TIMER:
                return --state;

            default:
                return  state;    
        }

}




const GlobalState = (combineReducers({
    score, 
    finished, 
    currentQuiz, 
    quizzes, 
    time
}));
export default GlobalState;
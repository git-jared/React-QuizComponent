import React, { Component } from 'react'

import QuizQuestion from './QuizQuestion'

import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
       
    }
    render(){
      const isQuizEnd = (this.state.quiz_position - 1) == quizData.quiz_questions.length
      const quizQuestion = <QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]}></QuizQuestion>
      return(
        
        <div>
          {(isQuizEnd) ? <QuizEnd/> : quizQuestion} 
        </div>
    )}
}
export default Quiz
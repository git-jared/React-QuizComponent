import React, { Component } from 'react'

import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }
    render(){
      return(
        <div> 
          <QuizQuestion>{this.quizData.quiz_questions[0].instruction_text}</QuizQuestion>
        </div>
    )}
}
export default Quiz
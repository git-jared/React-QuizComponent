import React, {Component} from 'react'

class QuizQuestion extends Component {
  constructor(props){
    super(props)
    this.quiz_question = quizData.quiz_questions[quiz_position-1]
  }
    render(){
      return(
        <main>
          <section>
            <p>{this.props.instrction_text}</p>
            <ul>
              <li>{this.props.quiz_question.answer_options[0]}</li>
            </ul>
          </section>
        </main>
      )
  }

}
export default QuizQuestion
import React, { Component } from 'react'
import Answer from './Answer'
import '../css/Main.css'
import ListQuizzes from './APIService'

class Challenge extends Component {
    constructor(props) {
        super(props)
        this.quizzes = ListQuizzes()
        this.state = {currentQuiz : 0, answer : 0}
        this.setAnswer = this.setAnswer.bind(this)
    }
    setAnswer(evt) {
        this.setState((state, props) => (
            { 
                currentQuiz : state.currentQuiz + 1 < this.quizzes.length ? state.currentQuiz + 1 : 0,
                answer : evt.target.id,
            }
            ))
    }
    render() {
        return (
            <div id="challenge">
                <h1>{ this.quizzes[this.state.currentQuiz].question}</h1>
                <br />
                <div className="container">            
                    { this.quizzes[this.state.currentQuiz].answers.map( (a, i) => (
                        <Answer answer={[i, a]} setAnswer={this.setAnswer} />
                    ))}
                    <br />
                </div>
            </div>
        )
    }
}
export default Challenge
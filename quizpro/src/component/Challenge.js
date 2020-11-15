import React, { Component } from 'react'
import Answer from './Answer'
import '../css/Main.css'
import listQuizzes from './APIService'
import loading from '../loading.gif'

class Challenge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuiz : 0,
            quizzes : null, 
            score : 0
        }
        this.setScore = this.setScore.bind(this)
    }
    componentDidMount() {
        listQuizzes()
            .then(resp => resp.json())
            .then(
                data => this.setState({quizzes : data}),
                err => this.setState({quizzes : null})
            )
    }
    setScore(evt) {
        this.setState((state, props) => {
            const newState = { 
                score : evt.target.id == state.quizzes[state.currentQuiz].answer ? state.score + 1 : state.score,
                currentQuiz : state.currentQuiz + 1,
                }
            if(newState.currentQuiz === state.quizzes.length)
                props.setResult(newState.score)
            return newState
        }
        
        )
    }
    render() {
        if(this.state.quizzes == null || this.state.currentQuiz === this.state.quizzes.length) {
            return <div id="challenge"><img src={loading} alt="loading" /></div>
        }
        else {
            return (
                <div id="challenge">
                    <h1>{ this.state.quizzes[this.state.currentQuiz].question}</h1>
                    <br />
                    <div className="container">            
                        { this.state.quizzes[this.state.currentQuiz].choices.map( (a, i) => (
                            <Answer choice={[i, a]} setScore={this.setScore} />
                        ))}
                        <br />
                    </div>
                </div>
            )
        }
    }
}
export default Challenge
import {React, } from 'react'
import '../css/Answer.css'

const Answer = (props) => {
    return (
        <div className="box" id={props.answer[0]} key={props.answer[0]} onClick={props.setAnswer}>
            <a href="#box">
                <h2>{props.answer[1]}</h2>
            </a>
        </div>
    )
}
export default Answer
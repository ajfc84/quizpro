import {React, } from 'react'
import '../css/Answer.css'

const Answer = (props) => {
    return (
        <div className="box" id={props.choice[0]} key={props.choice[0]} onClick={props.setScore}>
            <a href="#box">
                <h2>{props.choice[1]}</h2>
            </a>
        </div>
    )
}
export default Answer
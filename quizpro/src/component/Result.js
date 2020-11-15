import React, { useEffect, useState } from 'react'
import {getResults, setResult} from './APIService'
import '../css/Result.css'
import {EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton} from 'react-share'

const Result = (props) => {
    const [resultsChart, setResultsChart] = useState(null)
    const score = props.result.score
    const time = props.result.time
    useEffect(() => {
        setResult(score, time)
        .then(res => res.json())
        .then(
            data => getResults(data.user)
                    .then(res => res.blob())
                    .then(
                        data => setResultsChart(URL.createObjectURL(data)),
                        err => console.log(err)
                    ),
            err => console.log(err)
        )
    }, [])
    const minutes = Math.trunc(time / 1000 / 60)
    const seconds = Math.trunc(time / 1000 % 60)
    const timeMessage = ` The challenge was completed in ${minutes} minute(s) and ${seconds}second(s)!`
    let levelMessage = ''
    if(score < 2)
        levelMessage = "Clueless. Don’t be discouraged! Learn some more about this topic, and come back to try again!"
    else if(score < 5)
        levelMessage = "Beginner. This is the level most players end up with after answering this quiz for the first time. Learn some more about this topic and come back to try again!"
    else if(score < 8)
        levelMessage = "Confident: This is the level players are getting pro! Continue your progress and rock it!"
    else
        levelMessage = "Expert: This is the highest level achievable! Thanks for being awesome as you are!"
    levelMessage = <h1>Your level is {levelMessage}</h1>
    let shareMessage = "Quiz Pro Shared Message"
    return (
        <div className="container">
            <img id="chart" src={resultsChart} alt="results" />
            {levelMessage}
            {timeMessage}
            <h4>Share:</h4>
            <div id="socialMedia">
                <EmailShareButton subject="Quiz Pro Challenge" body={shareMessage}><EmailIcon size="32" /></EmailShareButton>
                <FacebookShareButton quote={shareMessage} url="http://localhost:3000"><FacebookIcon size="32" /></FacebookShareButton>
                <LinkedinShareButton title="Quiz Pro Challenge" summary={shareMessage} source="Quiz Pro" url="http://localhost:3000"><LinkedinIcon size="32" /></LinkedinShareButton>
            </div>
        </div>
    )
}
export default Result
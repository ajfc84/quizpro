import React, { useEffect, useState } from 'react'
import {getResults, setResult} from './APIService'

const Result = (props) => {
    const [resultsChart, setResultsChart] = useState(null)
    const result = props.result
    useEffect(() => {
        setResult(result)
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

    let message = ''
    if(result < 2)
        message = "Clueless. Don’t be discouraged! Learn some more about this topic, and come back to try again!"
    else if(result < 5)
        message = "Beginner. This is the level most players end up with after answering this quiz for the first time. Learn some more about this topic and come back to try again!"
    else if(result < 8)
        message = "Confident: This is the level players are getting pro! Continue your progress and rock it!"
    else
        message = "Expert: This is the highest level achievable! Thanks for being awesome as you are!" 
    return (
        <div>
            <h1>Your level is {message}</h1>
            <img src={resultsChart} alt="results" />
        </div>
    )
}
export default Result
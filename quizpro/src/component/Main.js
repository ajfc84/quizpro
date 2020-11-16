import React, { useState } from 'react'
import '../css/Main.css'
import Challenge from './Challenge'
import Result from './Result'
import Login from './Login'

const Main = () => {
    const [result, setResult] = useState(null)
    const [loggedin, setLoggedin] = useState(false)

    return(
        <div className="main">
            { !loggedin ? <Login setLoggedin={setLoggedin}/> : result !== null ? <Result result={result} /> : <Challenge setResult={setResult} /> }
        </div>
    )
}
export default Main
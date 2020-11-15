import React, { useState } from 'react'
import '../css/Main.css'
import Challenge from './Challenge'
import Result from './Result'

const Main = () => {
    const [result, setResult] = useState(null)

    return(
        <div className="main">
            { result !== null ? <Result result={result} /> : <Challenge setResult={setResult} />}
        </div>
    )
}
export default Main
import React, { useState } from 'react'
import '../css/Main.css'
import Challenge from './Challenge'
import Result from './Result'

const Main = () => {
    const [result, setResult] = useState(-1)

    return(
        <div className="main">
            { result >= 0 ? <Result result={result} /> : <Challenge setResult={setResult} />}
        </div>
    )
}
export default Main
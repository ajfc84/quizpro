import {React, } from 'react'

function listQuizzes () {
    return fetch('http://localhost:8000/api/v1/quiz/')
}

export function setResult (score) {
    let result = {'score' : score, 'user' : 2}
    return fetch('http://localhost:8000/api/v1/result/', {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json', 
        },
        body : JSON.stringify(result),
    })
}

export function getResults(userId) {
    return fetch(`http://localhost:8000/api/v1/result/show/${userId}`)
}

export default listQuizzes
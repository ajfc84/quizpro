
class APIService {
    constructor() {
        this.apiToken = ''
    }

    static login(username, password) {
        const login = {'username' : username, 'password' : password}
        let loggedin = false
        return fetch('http://localhost:8000/api/v1/rest-auth/login/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(login)
        })
        .then(resp => resp.json())
        .then(data => {this.apiToken = data.key; return true},
            err => console.log(err))
    }

    static listQuizzes () {
        return fetch('http://localhost:8000/api/v1/quiz/', {
            method : 'GET',
            headers : {
                'Authorization' : `Token ${this.apiToken}`
            },
        })
        .then(resp => resp.json())
    }

    static setResult (score, time) {
        let result = {'score' : score, 'time' : time,  'user' : 2}
        return fetch('http://localhost:8000/api/v1/result/', {
            method : 'POST',
            headers : {
                'Authorization' : `Token ${this.apiToken}`, 
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(result),
        })
        .then(resp => resp.json())
    }

    static getResults(userId) {
        return fetch(`http://localhost:8000/api/v1/result/show/${userId}`, {
            method : 'GET',
            headers : {
                'Authorization' : `Token ${this.apiToken}`
            },
        })
        .then(resp => resp.blob())
    }
}
export default APIService
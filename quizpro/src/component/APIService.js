
class APIService {
    constructor() {
        this.apiToken = ''
    }

    static login(username, password) {
        const login = {'username' : username, 'password' : password}
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

    static async listQuizzes () {
        const resp = await fetch('http://localhost:8000/api/v1/quiz/', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${this.apiToken}`
            },
        });
        return await resp.json();
    }

    static async setResult (score, time) {
        let result = {'score' : score, 'time' : time}
        const resp = await fetch('http://localhost:8000/api/v1/result/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${this.apiToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        });
        return await resp.json();
    }

    static async getResults(userId) {
        const resp = await fetch(`http://localhost:8000/api/v1/result/show/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${this.apiToken}`
            },
        });
        return await resp.blob();
    }
}
export default APIService
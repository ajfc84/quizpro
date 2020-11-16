import React from 'react'
import '../css/Login.css'
import ApiService from './APIService'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            username : '', 
            password : '',
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleLogin(evt) {
        const {name, value} = evt.target
        this.setState({ [name] : value })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        ApiService.login(this.state.username, this.state.password)
        .then(loggedin => this.props.setLoggedin(loggedin))
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} id="login">
                <label>
                    Username: <input type='text' name='username' value={this.state.username} onChange={this.handleLogin} /><br />
                </label>
                <label>
                    Password: <input type='password' name='password' value={this.state.password} onChange={this.handleLogin} /><br />
                </label>
                <input type='submit' value='Login'/>
            </form>
        )
    }
}
export default Login
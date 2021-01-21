import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    ChangeUsername =(value)=>(
        this.setState({
            username: value
        })
    )

    ChangePassword=(value)=>{
        this.setState({
            password: value
        })
    }

    PopUp=()=>{
        alert(`Username: ${this.state.username} and Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input onChange={(e)=>{this.ChangeUsername(e.target.value)}}/>
                <br></br>
                <input onChange={(e)=>{this.ChangePassword(e.target.value)}}/>
                <br></br>
                <button
                onClick={this.PopUp}>
                    Login
                </button>
            </div>
        )
    }
}

export default Login
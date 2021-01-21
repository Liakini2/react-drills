import React, {Component} from 'react'

class AddText extends Component{
    constructor(){
        super()
        this.state={
          text: ''
        }
    }

    ChangeText = (value) =>{
        this.setState({
            text: value
        })
    }

    render(){
        return(
            <div>
                <input onChange={(e)=>{this.ChangeText(e.target.value)}}/>
                <br></br>
                <span>
                    {this.state.text}
                </span>
            </div>
        )
    }
}

export default AddText
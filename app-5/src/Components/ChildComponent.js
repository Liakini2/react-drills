import React, {Component} from 'react'

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <img src={this.props.url}/>
                <br></br>
                <img src={this.props.urltwo}/>
            </div>
        )
    }
}

export default ChildComponent
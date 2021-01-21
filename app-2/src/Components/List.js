import React, {Component} from 'react'

class List extends Component{
    constructor(){
        super()
        this.state={
            list: ['Cookies', 'Ice Cream', 'Gelato', 'Cake', 'Candy']
        }
    }

    DisplayList=()=>{
        
    }
    render(){
        return (
                this.state.list.map((element, index)=>{
                    return(<h2 key={index}>{element}</h2>)
                }
            )
        )
    }
}

export default List
import React, {Component} from 'react'

class AddList extends Component{
    constructor(){
        super()
        this.state ={
            filteredList: '',
            list: ['Cookies', 'Ice Cream', 'Cake', 'Candy', 'Chocolate']
        }
    }

    FilterList = (value) =>{
        this.setState({
            filteredList: value
        })
    }
    
    render(){
        let display = this.state.list
            .filter(element=>element.includes(this.state.filteredList))
            .map((element, index)=><h2 key={index}>{element}</h2>)
        
        return(
            <div>
                <input onChange={e=>this.FilterList(e.target.value)}/>
                {display}
            </div>
        )
    }
}

export default AddList
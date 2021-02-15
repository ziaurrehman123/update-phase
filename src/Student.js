import React, { Component } from 'react'
import Marks from './Marks'
export default class Student extends Component {
    constructor(){
        super();
        this.state ={
            roll:103
        }
    }
    clickHandle =()=>{
        console.log("Button Clicked");
        // this.setState({roll:104})
        this.setState({roll:this.state.roll + 2})
    }
    render() {
        console.log("Student-rendered");
        return (
            <div>
                <Marks roll={this.state.roll}/>
                <button onClick={this.clickHandle}>Change</button>
                </div>
        )
    }
}

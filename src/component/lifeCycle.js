import React, { Component } from 'react'
import User from './User';

export default class lifeCycle extends Component {
    constructor(){
        super();
        console.warn("constructor");
        this.state={
               toggle:true

        }
    }
    


    render() {
        console.warn("Render");
        return (
            <div>
                <h1>hello</h1>
                {
                    this.state.toggle ? <User /> : null
                }
                <button onClick={() =>{this.setState({toggle:!this.state.toggle})}}>click</button>
            </div>
        )
    }
}

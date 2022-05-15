import React, { Component } from 'react'

export default class User extends Component {

    componentWillUnmount()
    {
        alert(" This Components deleted !!");
    }

    render() {
        return (
            <div>
                <ul>
                    <li>this is</li>
                    <li>this to be</li>
                    <li>this not to b</li>
                </ul>
            </div>
        )
    }
}

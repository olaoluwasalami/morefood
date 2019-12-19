import React, { Component } from 'react'
import Morefood from "./Morefood";
import {Link, Switch, Route } from 'react-router-dom';



export default class App extends Component {
    render() {
        return (
            <div>
                <Morefood />
                {/* <Order/> */}

            </div>
        )
    }
}

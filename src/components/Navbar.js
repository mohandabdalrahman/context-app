import React, { Component } from 'react'
import { ThemeContext } from './contexts/ThemeContext';

export default class Navbar extends Component {
    static contextType=ThemeContext
    render() {
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark
        return (
            <nav style={{background:theme.ui,color:theme.syntax}}>
                <ul>
                    <li>Home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        )
    }
}

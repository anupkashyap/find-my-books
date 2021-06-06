import React, { Component } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import './../Styles/Help.css'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="helpRow">
                    <h3>Semantically Intelligent Book Recommendation system</h3>

                </div>
                <div className="helpRow">
                    <IconButton href="https://www.github.com" target="_blank">
                        <GitHubIcon></GitHubIcon>
                    </IconButton>
                </div>


            </div>
        )
    }
}

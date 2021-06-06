import React, { Component } from 'react'
import './../Styles/Help.css'
export default class Help extends Component {
    render() {
        return (
            <div className="helpSection">
                <div className="helpRow">
                    <h3>How to use</h3>
                </div>
                <div className="helpRow">
                <h5>• Swipe the books that you like to the right.</h5>
                   
                </div>
                <div className="helpRow">
                <h5>• Swipe the books that you don't like to the left.</h5>
                   
                   </div>
                   <div className="helpRow">
                   <h5>• New books automatically load based on your preferences.</h5>
                   
                   </div>
                   <div className="helpRow">
                   <h5>• Click on the icon to get a curated list of recomendations.</h5>   
                   </div>
         
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import  '../components/style/Badge.css'
import ConfoLogo from '../images/badge-header.svg'


export class Badges extends Component {

    render() {
        return (

            <React.Fragment>
                <div className="Badge">
                    <div className="Badge__header">
                        <img src={ConfoLogo} alt="logo"></img>
                    </div>
                    <div className="Badge__section-name">
                        <img className="adge__avatar" src={ConfoLogo} alt="logo" ></img>
                    
                    
                    <h1>
                    {this.props.firsname}  <br/> {this.props.lasname}
                    </h1>
                
                    </div>

                
                <div className="Badge__section-info">
                    <p>{this.props.job}</p>
                    <p>Frontend enginer</p>
                </div>
                    <div className="Badge__footer"></div>
                
                </div>
            </React.Fragment>
        )
    }
}

export default Badges

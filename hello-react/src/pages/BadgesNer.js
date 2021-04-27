import React, { Component } from 'react'



import  header from '../images/badge-header.svg'
import '../components/style/BadgeNew.css'
//import Navbar from '../components/Navbar'
import {Badges} from '../components/Badges'
import { BadgeForm } from '../components/BadgeForm'


export class BadgesNer extends Component {
 //esto apra que se pueden mirar en los estados 
    state = {form:{
        firsname: "",
        lastname: "",
        email: "",
        jobtitle: ""
    }};
    
    HandeChange = e  => {
        //const NextForm = this.state.form
        //NextForm[e.target.name] = e.target.value
    console.log(this.state)
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] :e.target.value
                
            }
        })
    }
    
    render() {
        return (
            <React.Fragment>
               

                    <div className="BadgeNew__hero">
                        <img  className="img-fluid" src={header}></img>

                    </div>

            <div className="container">
                <div className="row">
                    <div className="col">

                       <Badges 
                       firsname={this.state.form.firsname}
                        lasname={this.state.form.lastname}
                         job={this.state.form.jobtitle}/>
                      
                    </div >
                    <div className="col-6">
                    <BadgeForm  onChange={this.HandeChange}  FormVlue={this.state.form}/>
                    </div>
                   

                </div>
            </div>

            
            </React.Fragment>
        )
    }
}

export default BadgesNer

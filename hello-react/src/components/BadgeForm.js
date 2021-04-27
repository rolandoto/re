import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class BadgeForm extends Component {
    //esto es necesario para statte
    //state= {
        
   // }
    /*hanlechange = e => {
        //console.log({
            //aqui para mira el layou del todo lo que entra en el input
           // name: e.target.name,
            //value: e.target.value
        //})
        //esto es para que se guarde la informacion en cada variable correspondiente 
        this.setState({[e.target.name] : e.target.value,
            
        })
        
    }*/
    changeclick  = e => {
        console.log('click')
        
    }

    hadnlesubmit  = e => {
       e.preventDefault();
       
        
    }
    render() {

        
        //enlazar enventos
        return (
            <div>
                <h1>New Attend </h1>

            <form onSubmit={this.hadnlesubmit}>
                    <div className="form-group">
                        <label  htmlFor=""/>firsname
                        <input  onChange={this.props.onChange}
                        name="firsname"
                        className="form-control"
                        value={this.props.FormVlue.firsname}
                        />
                        
                    </div>

                    <div className="form-group">
                        <label  htmlFor=""/>last mane
                        <input  onChange={this.props.onChange}
                          name="lastname"
                           className="form-control"
                           value={this.props.FormVlue.lastname}/>
                           
                    </div>

                    <div className="form-group">
                        <label  htmlFor=""/>email
                        <input  onChange={this.props.onChange}
                          name="email"
                          type="text"
                           className="form-control"
                           value={this.props.FormVlue.email} 
                           />
                          
                    </div>

                    <div className="form-group">
                        <label  htmlFor=""/>jon title

                        <input  onChange={this.props.onChange}
                          name="jobtitle" 
                          className="form-control"
                          value={this.props.FormVlue.jobtitle} 
                        />
                    </div>
                    <button onClick={this.changeclick} className="btn btn-primary">save</button>
            </form>

            </div>
        )
    }
}


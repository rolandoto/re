import React, { Component, useState} from 'react'

import PropTypes from 'prop-types'
import {BadgesNer} from './BadgesNer'
//import Navbar from '../components/Navbar'

import {Link} from 'react-router-dom'
import '../pages/style/Badges.css'
import Confologo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import api from '../api'
import Counter from './Counter'
export class Bages extends Component {
  
    
    

    prueba=  
        {
          loading: true,
          error:null,
          data : undefined
       
    }
    //MONTAJE
    constructor(props) {
      super(props)
        console.log('1. constructor()')
      //esto de aqui es para que se pueda usar en el componentdimount y transportarlo como tal
        this.state=  
        {
            data:
            []
       
    }

    }
    //MONTAJE
    componentDidMount() {
        console.log('3 componentDimount()')
      // le ponemos this porque para poder exportarlo a otro component  
      this.timeuid = setTimeout(()=>{
        this.setState({

            
         
           data :[
              {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
          
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
           
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],

        })
      },3000)
     
    }

    //ACTUALIZACION
    componentDidUpdate(Prevprops,PreveState){
      
      console.log('5. componentDidUpdate')
      console.log({
        Prevprops:Prevprops,PreveState:PreveState
      })
      console.log({
        props:this.props, 
        state:this.state,
      })
    }

    //DESMONTAJE
    componentWillUnmount() {
      console.log('6. ComponentWillUnmount') 
      //ES PARA BORRAR MEMORIA
      //en este clear es para cundo le doy en el button no me salga que no lo encontro
      //sino que lo cancele porque el tiempo ya su culmino
      //this = es para poder entrar a otro conponent sin ningun problema
      clearTimeout(this.timeuid)
    }

    //LLAMANDO LA API
  
    //HOOKS

   

    render() {
      //MONTAJE
      console.log('2. render()')

        if(this.state.loading == true){
          return <h1>Loading....</h1>
        }
        return (
            <div>
             

               <div className="Badges">
                   <div className="Badges__hero">
                       <div  className="Badges__container">
                           <img className="Badges_conf-logo" src={Confologo} alt="Conf logo" >

                           </img>
                       </div>
                   </div>
               </div>

               <div>
                   <div className="Badges__buttons">
                       <Link to="/BadgesNer"  className="btn btn-primary">new badge</Link>
                      <Counter   />
                        </div>
               </div>

               <div className="Badges__list">
                        <div className="Badges__container">
                           <BadgesList Bages={this.state.data} resfull={this.prueba.Datos} />
                         </div>
                    </div>
            </div>
        )
    }
}
//EN EL BADGELLST LE ESTA PASANDO TODOS LOS STATE.DATA
export default Bages

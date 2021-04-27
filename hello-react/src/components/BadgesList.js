import React, { Component } from 'react'

export class BadgesList extends Component
/*<ul  className="list-unstyled">
                     {this.props.resfull.map((E)=> {
                         return (
                             <li Key={E.id}>
                                    {E.firstName}
                             </li>
                         )
                     })}
                 </ul>
                 */

{
    render() {
        return (
            <div>
                 <ul className=" list-unstyled">
                        {this.props.Bages.map((Bages) =>{
                            
                            //este key nos ayuda en react que cuando renderizamos varios elementos
                            //por obligacion hay que darle el id para que no salga error
                            return (
                                <li className=" border " key={Bages.id}>
                                     <img className="cambio" src={Bages.avatarUrl}></img>
                                    <p>
                                        <br/>
                                        {Bages.firstName}  {Bages.lastName} 
                                       
                                       <br/>
                                        {Bages.email}
                                        </p>
                                        
                                </li> 
                            )
                    })}
                        
                                
                 </ul>

                 
            </div>
        )
    }
}

export default BadgesList

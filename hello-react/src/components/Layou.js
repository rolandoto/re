import React from 'react'

import Navbar  from './Navbar'

const Layou = (props) => {
    //aqui el me pone en las dos paginas el Navbar muy bueno esta funcion
    return  (
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layou

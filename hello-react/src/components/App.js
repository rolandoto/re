import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'



import  Bages  from '../pages/Bages';
import BadgesNer from '../pages/BadgesNer';
import Layou from './Layou';
import NoFound from '../pages/NoFound';

function App ()  {
    return (
        <BrowserRouter>
        <Layou>
            <Switch>
                <Route  exact path="/Bages" component={Bages} />
                <Route exact path="/BadgesNer" component={BadgesNer}/>
                {/* es necesario una  mandar un cojunto para eso es
                 necesario teber todos los componentes del route
                */}
                <Route  component={NoFound}/>
            </Switch>
        </Layou>
        </BrowserRouter>
    )

    }

export default App; 
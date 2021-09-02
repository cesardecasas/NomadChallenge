import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Info from './Info'


const App =()=>{


    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/info' component={Info}/>
            </Switch>
        </div>
    )
}

export default App
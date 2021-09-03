import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Info from './Info'
import Booking from './Book'
import Layout from './Layout'
import '../css/App.css'

const App =()=>{


    return(
        <div>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/info' component={Info}/>
                    <Route exact path='/book' component={Booking}/>
                </Layout> 
            </Switch>
        </div>
    )
}

export default App
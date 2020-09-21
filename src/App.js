import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './login'
import Home from './home';
// import Org from './org'
import Vegetables from './veges'
import Fruits from './fruits'

import Header from "./ui-components/header";

function App(){
    return(
        <Router>
            <Switch>
       

            <Route exact path='/home' >
            <Header/>
                <Home/>
                
            </Route>
            <Route exact path='/' >
                <Login/>
            </Route>
            <Route exact path='/veges' >
            <Header/>
                <Vegetables/>
            </Route>
            <Route exact path='/fruits' >
            <Header/>
                <Fruits/>
            </Route>
         </Switch>
        </Router>
    )
}

export default App;

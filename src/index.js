import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home'
import { HashRouter,Route, Switch} from 'react-router-dom';


ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path="/" name="Home" component={Home}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginContainer from '../components/LoginContainer.js';
import Home from './Home.js';
import SignupContainer from '../components/SignupContainer.js';



class Routes extends Component {
   render() {
      return(
       <div>
         <Switch>
           <Route path="/home" exact={true} component={Home}/>
           <Route path="/login" exact={true} component={LoginContainer}/>
           <Route path="/" exact={true} component={SignupContainer}/>
         </Switch>
       </div>
     )
   }
}

export default Routes;

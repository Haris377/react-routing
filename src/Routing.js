import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class Routing extends Component {
   
    render() { 
        return ( 
            <Router>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                    <Route path="/home" exact strict render={
                         () => {
                  return ( <h1>Welcome Home</h1>);
          }
        }/>
        <Route path="/about" exact strict render={
          () => {
            return ( <h1>Welcome About</h1>);
          }
        }/>
                </div>
            </Router>
         );
    }
}
 
export default Routing;
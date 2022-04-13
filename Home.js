import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom"; 
import { Button } from 'semantic-ui-react';

import Soda from './Soda';
import Cookies from './Cookies';
import Fruits from './Fruits';

class Home extends Component {

    render() {
        return(
        <div>
            <h1>Vending machine</h1>
            <h3>Choose a snack</h3>
            <img src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
             />
             <div class="options">
             <Link to="/Soda">
                <Button >
                    <p>Soda</p>
                </Button>
            </Link>
            <Link to="/Fruits">
                <Button >
                    <p>Fruits</p>
                </Button>
            </Link>
            <Link to="/Cookies">
                <Button >
                    <p>Cookies</p>
                </Button>
            </Link>
            </div>

        </div>
        )
    }
}

export default Home;